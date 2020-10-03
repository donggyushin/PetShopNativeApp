import AuthDispatchType from '../actions/AuthActionTypes';

interface InitialState {
  loggedIn: boolean;
}

const initialState: InitialState = {
  loggedIn: false,
};

const AuthReducer = (
  state = initialState,
  action: AuthDispatchType,
): InitialState => {
  switch (action.type) {
    case 'AUTH_LOGGED_IN_TRUE':
      return loggedInTrue(state, action);
    case 'AUTH_LOGGED_IN_FALSE':
      return loggedInFalse(state, action);
    default:
      return state;
  }
};

const loggedInTrue = (
  state: InitialState,
  action: AuthDispatchType,
): InitialState => {
  if (action.type !== 'AUTH_LOGGED_IN_TRUE') return state;
  return {
    ...state,
    loggedIn: true,
  };
};

const loggedInFalse = (
  state: InitialState,
  action: AuthDispatchType,
): InitialState => {
  if (action.type !== 'AUTH_LOGGED_IN_FALSE') return state;
  return {
    ...state,
    loggedIn: false,
  };
};

export default AuthReducer;
