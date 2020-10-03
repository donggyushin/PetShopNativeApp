import {ThemeType} from '../types/Types';

export const THEME_UPDATE = 'THEME_UPDATE';

interface themeUpdate {
  type: typeof THEME_UPDATE;
  payload: ThemeType;
}

type ThemeDispatchType = themeUpdate;

export default ThemeDispatchType;
