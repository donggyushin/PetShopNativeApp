export const AUTH_LOGGED_IN_TRUE = 'AUTH_LOGGED_IN_TRUE';
export const AUTH_LOGGED_IN_FALSE = 'AUTH_LOGGED_IN_FALSE';

interface authLoggedInTrue {
  type: typeof AUTH_LOGGED_IN_TRUE;
}

interface authLoggedInFalse {
  type: typeof AUTH_LOGGED_IN_FALSE;
}

type AuthDispatchType = authLoggedInTrue | authLoggedInFalse;

export default AuthDispatchType;
