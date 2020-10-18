import AuthReducer from './AuthReducer';
import GestureEnabledReducer from './GestureEnabledReducer';
import ThemeReducer from './ThemeReducer';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({AuthReducer, ThemeReducer, GestureEnabledReducer});

export default RootReducer;
