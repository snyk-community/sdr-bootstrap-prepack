import { createStructuredSelector } from 'reselect';
import { START, DONE, ERROR, parseAction, wrapPromise } from '../commons';
import {post, get, getAuthToken, setAuthToken } from '../../api/restApi.js';
import {setupUserAccount, cleanUserAccount} from './userAccountActions.js';

const SIGN_IN_SIGN_IN_OUT_FORM = 'SIGN_IN_SIGN_IN_OUT_FORM';
const SIGN_OUT_SIGN_IN_OUT_FORM = 'SIGN_OUT_SIGN_IN_OUT_FORM';
const CLEAN_ERROR_SIGN_IN_OUT_FORM = 'CLEAN_ERROR_SIGN_IN_OUT_FORM';

export const selectorSignInOutForm = createStructuredSelector({
    component: state => state.components.SignInOutForm,
    userAccount: state => state.userAccount
});

export function signIn_SignInOutForm(username, password, rememberMe) {
    return (dispatch, getState) => wrapPromise(SIGN_IN_SIGN_IN_OUT_FORM, dispatch, () => {
        if (!username || username.length <= 0) {
            return Promise.reject({message: 'User name value should be not empty'});
        }

        if (!password || password.length < 6) {
            return Promise.reject({message: 'Password value should be not less than 6 characters'});
        }

        return getAuthToken(username, password)
            .then(token => {
                setAuthToken(token);
                return get('/secure/user/profile')
                    .then(userProfileData => {
                        userProfileData = Object.assign({}, userProfileData, {token});
                        dispatch(setupUserAccount(userProfileData, rememberMe));
                        return {};
                    });
            });
    });
}
export function signOut_SignInOutForm() {
    return (dispatch, getState) => {
        setAuthToken(null);
        dispatch(cleanUserAccount());
        return () => {
            return {
                type: SIGN_OUT_SIGN_IN_OUT_FORM,
                payload: {}
            };
        }
    };
}
export function cleanError_SignInOutForm() {
    return {
        type: CLEAN_ERROR_SIGN_IN_OUT_FORM,
        payload: {}
    };
}

export default function (state = {}, action = {
    type: 'UNKNOWN'
}) {
    const {type, stage, payload} = parseAction(action);
    if (type === SIGN_IN_SIGN_IN_OUT_FORM) {
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
            state = Object.assign({}, state, {
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
                    status: 'error', error: payload.message ? payload.message : payload.toString()
                }
            });
            return state;
        }
    }
    if (type === SIGN_OUT_SIGN_IN_OUT_FORM) {
        state = Object.assign({}, state, {
            fetch: {
                status: 'done',
                error: null
            }
        });
        return state;
    }
    if (type === CLEAN_ERROR_SIGN_IN_OUT_FORM) {
        state = Object.assign({}, state, {
            fetch: {
                status: 'done',
                error: null
            }
        });
        return state;
    }

    return state;
}
