const localState = (state) => state.testsListPage;

export const getTests = (state) => localState(state).tests || [];