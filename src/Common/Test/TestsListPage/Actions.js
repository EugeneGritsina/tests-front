import { testsProxy } from '../../../Tools/ApiProxy.js';
import { setTestsAC } from './Reducer.js';

export const getTests = () => async (dispatch) => {

    testsProxy.getTests()
        .then(result => dispatch(setTestsAC(result)));
};