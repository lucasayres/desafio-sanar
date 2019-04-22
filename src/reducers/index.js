import { combineReducers } from 'redux';
import reducer, { initial as initialState } from '../lib/api';

export default combineReducers({
    reducer,
});

export const initial = {
    reducer: initialState
}