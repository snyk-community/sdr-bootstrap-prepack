import _ from 'lodash';
import { get, restApiBase } from '../../api/restApi.js';

const NULL_ACTION = 'NULL_ACTION';
const EVENT_BUS_ACTION = 'EVENT_BUS_ACTION';

export const ITEM_UPDATED = 'ITEM_UPDATED';
export const ITEM_DELETED = 'ITEM_DELETED';
export const ITEM_CREATED = 'ITEM_CREATED';
export const ITEM_TOGGLED = 'ITEM_TOGGLED';
export const ITEMS_SEARCH = 'ITEMS_SEARCH';
export const PAGES_INFO = 'PAGES_INFO';
export const PAGE_CHANGED = 'PAGE_CHANGED';

export const nullAction = { type: NULL_ACTION };

function _makeUrl(collection){
    if(collection){
        const { url, search, projection, page, sort } = collection;
        let params = '?';
        let path = url;
        if (search && search.name) {
            path += '/search/' + search.name;
            if (search.params) {
                _.forOwn(search.params, (value, key) => {
                    if(_.isArray(value) && value.length > 0){
                        value.forEach( item => {
                            params += key + '=' + encodeURIComponent(value) + '&';
                        });
                    } else {
                        params += key + '=' + encodeURIComponent(value) + '&';
                    }
                });
            }
        }
        if (projection) {
            params += 'projection=' + encodeURIComponent(projection) + '&';
        }
        if (page) {
            if (page.number) {
                params += 'page=' + page.number + '&';
            }
            if (page.size) {
                params += 'size=' + page.size + '&';
            }
        }
        if (sort) {
            _.forOwn(sort, (value, key) => {
                if(value === 'asc' || value === 'desc'){
                    params += 'sort=' + key + ',' + value + '&';
                }
            });
        }
        return path + params.substr(0, params.length - 1);
    }
}

export function getCollectionData(collection) {

    if (collection) {
        let request = _makeUrl(collection);
        //console.log('Request: ' + request);
        const uri = request.indexOf('http://') === 0 ? request : restApiBase + request;
        console.log('making request: ' + uri);
        return get(uri)
            .then(jsonData => {
                //console.log('Data: ' + JSON.stringify(jsonData, null, 4));
                return jsonData;
            });

    } else {
        return Promise.resolve();
    }
}

export function createParamsObj(paramsConfig, entityInstance){
    let result = {};
    if(paramsConfig && _.isObject(paramsConfig)){
        _.forOwn(paramsConfig, (value, prop) => {
            if(value.property){
                if(value.property === '_self'){
                    result[prop] = entityInstance._links.self.href;
                } else if(entityInstance._links[value.property]) {
                    result[prop] = entityInstance._links[value.property].href;
                } else {
                    result[prop] = entityInstance[value.property];
                }
            }
        });
    }
    return result;
}

export function getOptionsForSelected(selectedUrl, optionsReqConfig){

    return Promise.resolve({
        selected: null,
        optionsList: []
    }).then( result => {
        if(selectedUrl){
            return getCollectionData({
                url: selectedUrl
            }).then( data => {
                if (data) {
                    result.selected = data;
                }
                return result;
            });
        } else {
            return result;
        }
    }).then(result => {
        if(optionsReqConfig){
            return getCollectionData({
                url: optionsReqConfig.entityUrl,
                projection: optionsReqConfig.projection,
                sort: optionsReqConfig.sort
            }).then( data => {
                if(data && data._embedded && data._embedded[optionsReqConfig.entityCollectionName]){
                    result.optionsList = data._embedded[optionsReqConfig.entityCollectionName];
                }
                return result;
            });
        } else {
            return result;
        }
    }).then( result => {
        if(result.selected){
            const selectedRef = result.selected._links.self.href;
            if(result.optionsList.length > 0) {
                result.selected = result.optionsList.reduce((s, o) =>{
                    if(o._links.self.href === selectedRef){
                        return o;
                    }
                    return s;
                });
            }
        } else {
            if(result.optionsList.length > 0){
                result.selected = result.optionsList[0];
            }
        }
        return result;
    });
}

export function isRefsEqualsInArray(first, second){
    if(!first || !second || !_.isArray(first) || !_.isArray(second)){
        return false;
    } else {
        return _.isEqualWith(first, second, (n, o) => {
            if(n.length !== o.length){
                return false;
            } else {
                for(let i = 0; i < n.length; i++){
                    if(_.findIndex(o, item => item._links.self.href === n[i]._links.self.href )){
                        return false;
                    }
                }
            }
            return true;
        });
    }
}

export function isChanged(prev, next){
    if(prev && next){
        return (prev[ITEM_CREATED] !== next[ITEM_CREATED])
            || (prev[ITEM_DELETED] !== next[ITEM_DELETED])
            || (prev[ITEM_UPDATED] !== next[ITEM_UPDATED]);
    }
    return false;
}

export function isToggled(prev, next){
    if(prev && next) {
        return (prev[ITEM_TOGGLED] !== next[ITEM_TOGGLED]);
    }
    return false;
}

export function isSearch(prev, next){
    if(prev && next){
        return (prev[ITEMS_SEARCH] !== next[ITEMS_SEARCH]);
    }
    return false;
}

export function isPageChanged(prev, next){
    if(prev && next){
        return (prev[PAGE_CHANGED] !== next[PAGE_CHANGED]);
    }
    return false;
}

export function emitBusEvent(type, signature, meta = null){
    return {
        type: EVENT_BUS_ACTION,
        payload: {
            signature: signature,
            eventType: type,
            meta: meta
        }
    }
}

export default function(state = {}, action = {type: 'UNKNOWN'}){

    const {type} = action;

    if(type === EVENT_BUS_ACTION){
        const {signature, eventType, meta} = action.payload;
        if(!meta || !_.isEqual(state[signature].meta, meta)){
            //console.log('Changing meta for event: ' + eventType + ' and signature: ' + signature);
            let newState = Object.assign({}, state);
            newState[signature] = Object.assign({}, state[signature]);
            newState[signature].meta = Object.assign({}, state[signature].meta, meta );
            if(newState[signature][eventType] > 0){
                newState[signature][eventType] += 1;
            } else {
                newState[signature][eventType] = 1;
            }
            return newState;
        }
        //console.log('Do not change meta for event: ' + eventType + ' and signature: ' + signature);
        return state;
    }

    if(type === NULL_ACTION){
        return state;
    }
    return state;

}