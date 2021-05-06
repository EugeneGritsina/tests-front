let defaultState = {
    tests: []
}

// local actions
export const types = {
    TESTS_FETCHED: 'TESTS_FETCHED'
};


export default function testReducer (state = defaultState, action) {
    switch(action.type) {
        case types.TESTS_FETCHED: {
            return {...state, tests: action.payload}
        }
        default: return state;
    }
};

export const setTestsAC = (payload) => ({ type: types.TESTS_FETCHED, payload });