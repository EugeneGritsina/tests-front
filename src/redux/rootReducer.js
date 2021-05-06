import { combineReducers } from 'redux';

import testReducer from '../Common/Test/TestsListPage/Reducer.js';

const rootReducer = combineReducers({
    testsListPage: testReducer,
});

export default rootReducer;