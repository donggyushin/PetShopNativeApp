import AuthReducer from './AuthReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({AuthReducer});

export default RootReducer;
