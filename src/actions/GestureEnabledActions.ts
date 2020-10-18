import { Dispatch } from "redux";
import GestureEnabledDispatchType from "./GestureEnabledActionTypes";

export const gestureEnabledTrue = () => (dispatch:Dispatch<GestureEnabledDispatchType>) => {
 return dispatch({
  type:'GESTURE_ENABLED_TRUE'
 })
}

export const gestureEnabledFalse = () => (dispatch:Dispatch<GestureEnabledDispatchType>) => {
 return dispatch({
  type:'GESTURE_ENABLED_FALSE'
 })
}