import {combineReducers} from 'redux';
import {RESET_DATA, userData} from './userData';
import {assessmentData} from './assessment';

const appReducer = combineReducers({
    userData, assessmentData
});

export default (state, action) => {
    if (action.type === RESET_DATA) {
        // eslint-disable-next-line no-undefined
        return appReducer(undefined, action);
    }

    return appReducer(state, action);
};