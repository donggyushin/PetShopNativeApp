import {darkTheme, lightTheme} from '../../styles/theme';

const PublichNavigationHeaderStyle = (themeReducer: any): any => ({
  headerStyle: {
    backgroundColor:
      themeReducer.theme === 'dark'
        ? darkTheme.PRIMARY_BACKGROUND_COLOR
        : lightTheme.PRIMARY_BACKGROUND_COLOR,
    shadowColor: 'transparent',
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

export default PublichNavigationHeaderStyle;
