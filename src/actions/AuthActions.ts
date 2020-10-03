import AuthDispatchType from './AuthActionTypes';
import {Dispatch} from 'redux';

export const authLoggedInTrue = () => (
  dispatch: Dispatch<AuthDispatchType>,
) => {
  return dispatch({
    type: 'AUTH_LOGGED_IN_TRUE',
  });
};

export const authLoggedInFalse = () => (
  dispatch: Dispatch<AuthDispatchType>,
) => {
  return dispatch({
    type: 'AUTH_LOGGED_IN_FALSE',
  });
};
