import { createStructuredSelector } from 'reselect';
import { START, DONE, ERROR, parseAction, wrapPromise } from '../commons';
import {post, get, getAuthToken, setAuthToken } from '../../api/restApi.js';
import {getTokenFromCookies, setupUserAccount} from './userAccountActions.js';

const SIGN_IN_AUTO_SIGN_IN = 'SIGN_IN_AUTO_SIGN_IN';

export const selectorAutoSignIn = createStructuredSelector({
    component: state => state.components.AutoSignIn,
    userAccount: state => state.userAccount
});

export function signIn_AutoSignIn() {
    return (dispatch, getState) => wrapPromise(SIGN_IN_AUTO_SIGN_IN, dispatch, () => {
        const { userAccount: { username, token } } = getState();
        if (!username && !token) {
            let tokenFromCookies = getTokenFromCookies();
            if (tokenFromCookies) {
                setAuthToken(tokenFromCookies);
                return get('/secure/user/profile')
                    .then(userProfileData => {
                        userProfileData = Object.assign({}, userProfileData, {token: tokenFromCookies});
                        dispatch(setupUserAccount(userProfileData));
                        return {};
                    });
            } else {
                return Promise.reject({message: 'Token is missing in cookies'});
            }
        }
        return Promise.resolve({});
    });
}

export default function (state = {}, action = {
    type: 'UNKNOWN'
}) {
    const {type, stage, payload} = parseAction(action);
    if (type === SIGN_IN_AUTO_SIGN_IN) {
        if (stage === START) {
            state = Object.assign({}, state, {
                fetch: {
                    status: 'start',
                    error: null
                }
            });
            return state;
        }
        if (stage === DONE) {
            state = Object.assign({}, state, payload, {
                fetch: {
                    status: 'done',
                    error: null
                }
            });
            return state;
        }
        if (stage === ERROR) {
            state = Object.assign({}, state, {
                fetch: {
                    status: 'error', error: payload.message ? payload.message : payload
                }
            });
            return state;
        }
    }

    return state;
}
