let defaultState = {
    isHeaderShowed: true
}

export const types = {
    HIDE_HEADER: 'HIDE_HEADER',
    SHOW_HEADER: 'SHOW_HEADER',
};

export default function sharedReducer (state = defaultState, action) {
    switch(action.type) {
        case types.SHOW_HEADER: {
            return {...state, isHeaderShowed: true}
        }
        case types.HIDE_HEADER: {
            return {...state, isHeaderShowed: false}
        }
        default: return state;
    }
};

export const hideHeaderAC = () => ({ type: types.HIDE_HEADER });
export const showHeaderAC = () => ({ type: types.SHOW_HEADER });