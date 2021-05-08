import { combineReducers } from 'redux';

import testsListReducer from '../Pages/Test/TestsListPage/Reducer.js';
import testReducer from '../Pages/Test/TestPage/TestReducer.js';

const rootReducer = combineReducers({
    testsListPage: testsListReducer,
    testPage: testReducer,
    
});

export default rootReducer;