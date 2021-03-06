export interface DefaultThemeType {
  mode: string;
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  SECONDARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  SECONDARY_BUTTON_COLOR: string;
  PRIMARY_RED_COLOR: string;
}

export const darkTheme: DefaultThemeType = {
  mode: 'dark',
  PRIMARY_BACKGROUND_COLOR: 'black',
  PRIMARY_TEXT_COLOR: 'white',
  SECONDARY_TEXT_COLOR: '#ffffff',
  PRIMARY_BUTTON_COLOR: '#152642',
  SECONDARY_BUTTON_COLOR: '#506680',
  PRIMARY_RED_COLOR: '#e63946',
};
export const lightTheme: DefaultThemeType = {
  mode: 'light',
  PRIMARY_BACKGROUND_COLOR: '#FFFFFF',
  PRIMARY_TEXT_COLOR: 'black',
  SECONDARY_TEXT_COLOR: '#333333',
  PRIMARY_BUTTON_COLOR: '#4267B2',
  SECONDARY_BUTTON_COLOR: '#a1c9f1',
  PRIMARY_RED_COLOR: '#e63946',
};

export interface StyledThemeProps {
  theme: DefaultThemeType;
}
