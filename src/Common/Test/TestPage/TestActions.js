import { testsProxy } from '../../../Tools/ApiProxy.js';
import { setTestAC, clearStateAC } from './TestReducer.js';


export const getTest = (dispatch) => async (id) => {
    testsProxy.getTest(id)
        .then(test => dispatch(setTestAC(test)));
};

export const clearState = (dispatch) => (id) => {
    dispatch(clearStateAC());
}