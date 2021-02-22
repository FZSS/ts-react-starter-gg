import { combineReducers } from 'redux';
import reposReducer from 'store/repos/reducer';

const rootReducer = combineReducers({ repos: reposReducer });

export default rootReducer;
