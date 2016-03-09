import 'isomorphic-fetch';

const authenticationUrl = '/public/auth';
export const restApiBase = '/api';

let authenticationToken = null;

const requestsCache = new Map();
const REQ_CACHE_TTL = 30 * 1000; // 30 seconds

function makeRequest(options, isRelative = true){

    const headers = Object.assign({},
        {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'X-Auth-Token': authenticationToken
        },
        options.headers
    );
    let fetchOptions = {
        method: options.method || 'GET',
        headers: headers
    };
    if(options.body){
        fetchOptions.body = JSON.stringify(options.body);
    }
    const relativeUri = isRelative ? options.uri.replace(/^.*\/\/[^\/]+/, '') : options.uri;

    return fetch(relativeUri, fetchOptions)
        .then( response => {
            //console.log('Received response: ' + JSON.stringify(response, null, 4));
            //console.log('Received response: ' + response.status);
            //console.log('Received response: ' + response.statusText);
            //console.log(response.headers.get('Content-Type'));
            if (response.status >= 200 && response.status < 300) {

                return response.text()
                    .then(responseText => {
                        let jsonData = {};
                        try{
                            jsonData = JSON.parse(responseText);
                        } catch(e){
                        }
                        return jsonData;
                    });

            } else if(response.status === 400) {

                return response.text()
                    .then(responseText => {
                        let jsonData = null;
                        try{
                            jsonData = JSON.parse(responseText);
                        } catch(e){
                        }
                        if(jsonData){
                            if (jsonData.errors && jsonData.errors.length > 0) {
                                throw Error(jsonData.errors[0].message || response.statusText);
                            } else {
                                if(_.isObject(jsonData)){
                                    throw Error(JSON.stringify(jsonData));
                                } else {
                                    throw Error(jsonData);
                                }
                            }
                        } else {
                            throw Error(responseText);
                        }
                    });

            } else {
                throw Error(response.statusText);
            }
        });
}



export function getAuthToken(username, password) {

    return makeRequest({ uri: authenticationUrl, method: 'POST', body: { username, password } })
        .then( jsonData => {
            if(jsonData.token){
                return jsonData.token;
            } else {
                throw Error('Authentication failed: token is missing in the response from ' + authenticationUrl);
            }
        });

}

export function setAuthToken(token){
    authenticationToken = token;
}


export function getJSONSchema(uri){

    return makeRequest({
        uri,
        method: 'GET',
        headers: {
            'Accept': 'application/schema+json'
        }
    });

}

export function getALPS(uri){

    return makeRequest({
        uri,
        method: 'GET',
        headers: {
            'Accept': 'application/alps+json'
        }
    });

}

export function post(uri, body){

    return makeRequest({
        uri,
        method: 'POST',
        body
    });

}

export function patch(uri, body){

    return makeRequest({
        uri,
        method: 'PATCH',
        body
    });

}

export function del(uri){

    return makeRequest({
        uri,
        method: 'DELETE'
    });

}

export function get(uri){

    return makeRequest({ uri });


    //return Promise.resolve().then( () => {
    //    let jsonData = null;
    //    const curTimestamp = Date.now();
    //    if(uri){
    //        const cacheItem = requestsCache.get(uri);
    //        if(cacheItem){
    //            if((curTimestamp - cacheItem.regTimestamp) < REQ_CACHE_TTL){
    //                jsonData = cacheItem.jsonData;
    //                //console.log('REST API from cache with key: ' + uri);
    //            } else {
    //                requestsCache.delete(uri);
    //            }
    //        }
    //    }
    //    return jsonData;
    //}).then( jsonData => {
    //    if(!jsonData){
    //        return makeRequest({ uri })
    //            .then( jsonData => {
    //                requestsCache.set(uri, { jsonData, regTimestamp: Date.now() });
    //                //console.log('REST API set cache with key: ' + uri);
    //                return jsonData;
    //            });
    //    } else{
    //        return jsonData;
    //    }
    //});

}

