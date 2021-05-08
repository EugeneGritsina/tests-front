const localState = (state) => state.shared;

export const getIsHeaderShowed = (state) => localState(state).isHeaderShowed;