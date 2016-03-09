import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import userAccountReducer from '../actions/Authentication/userAccountActions.js';
import collectionsReducer from '../actions/commons/collectionsActions.js';
import signInOutFormReducer from '../actions/Authentication/SignInOutFormActions.js';
import projectInfoPanelReducer from '../actions/Project/ProjectInfoPanelActions.js';
import autoSignInReducer from '../actions/Authentication/AutoSignInActions.js';
const componentsReducer = combineReducers({
    ProjectInfoPanel: projectInfoPanelReducer,
    AutoSignIn: autoSignInReducer,
    SignInOutForm: signInOutFormReducer
});
const rootReducer = combineReducers({
    userAccount: userAccountReducer,
    collections: collectionsReducer,
    components: componentsReducer
});
export default rootReducer;