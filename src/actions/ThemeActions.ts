import {Dispatch} from 'redux';
import ThemeDispatchType from './ThemeActionTypes';
import {ThemeType} from '../types/Types';

export const themeUpdate = (theme: ThemeType) => (
  dispatch: Dispatch<ThemeDispatchType>,
) => {
  return dispatch({
    type: 'THEME_UPDATE',
    payload: theme,
  });
};
