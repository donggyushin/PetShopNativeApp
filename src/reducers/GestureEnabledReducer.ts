import GestureEnabledDispatchType from "../actions/GestureEnabledActionTypes"

interface InitialState {
 gesture:boolean
}

const initialState:InitialState = {
 gesture:true
}

const GestureEnabledReducer = (state = initialState, action:GestureEnabledDispatchType):InitialState => {
 switch (action.type) {
  case 'GESTURE_ENABLED_TRUE':
   return enabledTrue(state, action)
  case 'GESTURE_ENABLED_FALSE':
   return enabledFalse(state, action)
  default:
   return state
 }
}

const enabledTrue = (state:InitialState, action:GestureEnabledDispatchType):InitialState => {
 if (action.type !== 'GESTURE_ENABLED_TRUE') return state 
 return {
  ...state,
  gesture:true
 }
}

const enabledFalse = (state:InitialState, action:GestureEnabledDispatchType):InitialState => {
 if(action.type !== 'GESTURE_ENABLED_FALSE') return state 
 return {
  ...state,
  gesture:false
 }
}

export default GestureEnabledReducer