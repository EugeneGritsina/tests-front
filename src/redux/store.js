import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevtools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const initialState = {  }

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;