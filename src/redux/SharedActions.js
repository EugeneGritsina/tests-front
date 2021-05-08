import { hideHeaderAC, showHeaderAC } from './SharedReducer.js';

export const hideHeader = () => (dispatch) => {
    dispatch(hideHeaderAC());
};
export const showHeader = () => (dispatch) => {
    dispatch(showHeaderAC());
};