export interface DefaultThemeType {
  mode: string;
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  SECONDARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  SECONDARY_BUTTON_COLOR: string;
}

export const darkTheme: DefaultThemeType = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: '#353c51',
  PRIMARY_TEXT_COLOR: '#767d92',
  SECONDARY_TEXT_COLOR: '#ffffff',
  PRIMARY_BUTTON_COLOR: '#152642',
  SECONDARY_BUTTON_COLOR: '#506680',
};
export const lightTheme: DefaultThemeType = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR: '#ffefd5',
  PRIMARY_TEXT_COLOR: '#DB7093',
  SECONDARY_TEXT_COLOR: '#333333',
  PRIMARY_BUTTON_COLOR: '#b9d6f3',
  SECONDARY_BUTTON_COLOR: '#a1c9f1',
};
