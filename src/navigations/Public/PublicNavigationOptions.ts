import {darkTheme, lightTheme} from '../../styles/theme';

export const NewAccountOptions = (themeReducer: any): any => ({
  title: '회원가입',
  headerStyle: {
    backgroundColor:
      themeReducer.theme === 'dark'
        ? darkTheme.PRIMARY_BACKGROUND_COLOR
        : lightTheme.PRIMARY_BACKGROUND_COLOR,
  },
  headerTitleStyle: {
    color:
      themeReducer.theme === 'dark'
        ? darkTheme.PRIMARY_TEXT_COLOR
        : lightTheme.PRIMARY_TEXT_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
