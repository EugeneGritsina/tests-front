import { combineReducers } from 'redux';

import sharedReducer from './SharedReducer.js';
import testsListReducer from '../Pages/Test/TestsListPage/Reducer.js';
import testReducer from '../Pages/Test/TestPage/TestReducer.js';

const rootReducer = combineReducers({
    shared: sharedReducer,    
    testsListPage: testsListReducer,
    testPage: testReducer,
});

export default rootReducer;