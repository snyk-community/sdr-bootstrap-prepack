import docCookies from '../../api/cookies.js';
import {post, get, getAuthToken, setAuthToken } from '../../api/restApi.js';
import { START, DONE, ERROR, parseAction, wrapPromise } from '../commons';

const TOKEN_COOKIES_PROPERTY_NAME = 'changeme-auth-token';
const SETUP_USER_ACCOUNT = 'SETUP_USER_ACCOUNT';
const CLEAN_USER_ACCOUNT = 'CLEAN_USER_ACCOUNT';

export function getTokenFromCookies(){
    return docCookies.getItem(TOKEN_COOKIES_PROPERTY_NAME);
}

export function setupUserAccount(options, remember) {
    if(remember && options.token){
        docCookies.setItem(TOKEN_COOKIES_PROPERTY_NAME, options.token, 31536e3, "/");
    }
    return {
        type: SETUP_USER_ACCOUNT, payload: options
    };
}

export function cleanUserAccount() {
    docCookies.removeItem(TOKEN_COOKIES_PROPERTY_NAME, "/");
    return {
        type: CLEAN_USER_ACCOUNT
    };
}

export default function(state = {}, action = {
    type: 'UNKNOWN'
}) {
    const {type, stage, payload} = parseAction(action);


    if (type === SETUP_USER_ACCOUNT) {
        state = Object.assign({}, state, payload);
        return state;
    }

    if (type === CLEAN_USER_ACCOUNT) {
        state = Object.assign({}, state, {
            username: null,
            authorities: null,
            token: null
        });
        return state;
    }

    return state;
}


