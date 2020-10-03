import AuthReducer from './AuthReducer';
import ThemeReducer from './ThemeReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({AuthReducer, ThemeReducer});

export default RootReducer;
