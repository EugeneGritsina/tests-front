import { combineReducers } from 'redux';

import testsListReducer from '../Common/Test/TestsListPage/Reducer.js';
import testReducer from '../Common/Test/TestPage/TestReducer.js';

const rootReducer = combineReducers({
    testsListPage: testsListReducer,
    testPage: testReducer,
    
});

export default rootReducer;