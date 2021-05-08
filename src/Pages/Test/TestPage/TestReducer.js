let defaultState = {
    test: null
}

export const types = {
    TEST_FETCHED: 'TEST_FETCHED',
    CLEAR_STATE: 'CLEAR_STATE',
};


export default function testReducer (state = defaultState, action) {
    switch(action.type) {
        case types.TEST_FETCHED: {
            return {...state, test: action.payload}
        }
        case types.CLEAR_STATE: {
            return {test: null}
        }
        default: return state;
    }
};

export const setTestAC = (payload) => ({ type: types.TEST_FETCHED, payload });
export const clearStateAC = () => ({ type: types.CLEAR_STATE });