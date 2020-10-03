import ThemeDispatchType from '../actions/ThemeActionTypes';
import {ThemeType} from '../types/Types';

interface InitialState {
  theme: ThemeType;
}

const initialState: InitialState = {
  theme: 'dark',
};

const ThemeReducer = (
  state = initialState,
  action: ThemeDispatchType,
): InitialState => {
  switch (action.type) {
    case 'THEME_UPDATE':
      return update(state, action);
    default:
      return state;
  }
};

const update = (
  state: InitialState,
  action: ThemeDispatchType,
): InitialState => {
  if (action.type !== 'THEME_UPDATE') return state;
  return {
    ...state,
    theme: action.payload,
  };
};

export default ThemeReducer;
