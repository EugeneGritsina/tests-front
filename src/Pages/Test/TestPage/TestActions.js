import { testsProxy } from '../../../Tools/ApiProxy.js';
import { setTestAC, clearStateAC } from './TestReducer.js';


export const getTest = (dispatch) => async (id) => {
    testsProxy.getTest(id)
        .then(test => {
            const options = {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
            };
            test.estimatedTime = new Date(test.estimatedTime).toLocaleString("ru", options)
            
            dispatch(setTestAC(test));
        });
};

export const clearState = (dispatch) => (id) => {
    dispatch(clearStateAC());
}