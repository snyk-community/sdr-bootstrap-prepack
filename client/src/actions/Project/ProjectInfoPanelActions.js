import { createStructuredSelector } from 'reselect';
import { START, DONE, ERROR, parseAction, wrapPromise } from '../commons';
import { getALPS, restApiBase  } from '../../api/restApi.js';

const TEST_RES_TFUL = 'TEST_RES_TFUL';

export const selector_ProjectInfoPanel = createStructuredSelector({
    component: state => state.components.ProjectInfoPanel,
    userAccount: state => state.userAccount
});

export function testRESTful_ProjectInfoPanel() {
    return (dispatch, getState) => wrapPromise(TEST_RES_TFUL, dispatch, () => {
        return getALPS(restApiBase + '/profile')
            .then(response => {
                return { serverIsRunning: true }
            })
            .catch(err => {
                return { serverIsRunning: false }
            });
    });
}

export default function(state = {}, action = {
        type: 'UNKNOWN'
    }) {
    const {type, stage, payload} = parseAction(action);
    if (type === TEST_RES_TFUL) {
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
