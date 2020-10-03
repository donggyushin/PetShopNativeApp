/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';

import {Appearance, StatusBar} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {authLoggedInFalse, authLoggedInTrue} from './src/actions/AuthActions';
import {darkTheme, lightTheme} from './src/styles/theme';
import store, {StoreType} from './src/store';

import AsyncStorage from '@react-native-community/async-storage';
import MainScreen from './src/screens/private/main';
import {NavigationContainer} from '@react-navigation/native';
import PublicNavigation from './src/navigations/Public/PublicNavigation';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeProvider} from 'styled-components/native';
import {ThemeType} from './src/types/Types';
import {eventEmitter} from 'react-native-dark-mode';

declare const global: {HermesInternal: null | {}};

const AppContainer = () => {
  const [themeState, setThemeState] = useState<ThemeType>('dark');

  useEffect(() => {
    // debugger 를 활성화시키면 항상 light 만 반환시킨다. 다크모드로 개발중일때에는 밑에 코드를 주석처리 해주자
    // if (Appearance.getColorScheme() === 'dark') {
    //   setThemeState('dark');
    // } else {
    //   setThemeState('light');
    // }

    eventEmitter.on('currentModeChanged', (newMode) => {
      console.log(`Switched to ${newMode} mode`);
      if (newMode === 'dark') {
        setThemeState('dark');
      } else {
        setThemeState('light');
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
          <StatusBar
            barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
          />
          <App />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

const App = () => {
  const authReducer = useSelector((state: StoreType) => state.AuthReducer);
  const dispatch = useDispatch();

  const init = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch(authLoggedInTrue());
    } else {
      dispatch(authLoggedInFalse());
    }
  };

  useEffect(() => {
    init().then(() => {
      RNBootSplash.hide({duration: 500});
    });
  }, []);

  if (authReducer.loggedIn) {
    return <MainScreen />;
  } else {
    return <PublicNavigation />;
  }
};

export default AppContainer;
