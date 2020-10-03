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
import {themeUpdate} from './src/actions/ThemeActions';

declare const global: {HermesInternal: null | {}};

const AppContainer = () => {
  const [themeState, setThemeState] = useState<ThemeType>('dark');

  useEffect(() => {
    // 앱이 처음 실행될때 디바이스가 화이트 모드인지 다크 모드인지 확인하는 코드.
    // default 는 다크모드이다.
    // setThemeState(Appearance.getColorScheme() || 'dark');
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <App themeState={themeState} />
      </NavigationContainer>
    </Provider>
  );
};

interface Props {
  themeState: ThemeType;
}

const App: React.FunctionComponent<Props> = ({themeState}) => {
  const authReducer = useSelector((state: StoreType) => state.AuthReducer);
  const themeReducer = useSelector((state: StoreType) => state.ThemeReducer);
  const dispatch = useDispatch();

  // 앱이 처음 실행될때 수행하는 동작들.
  // 현재까지는 로그인 여부만 비동기로 판별한다
  const init = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch(authLoggedInTrue());
    } else {
      dispatch(authLoggedInFalse());
    }
  };

  useEffect(() => {
    dispatch(themeUpdate(themeState));

    // 디바이스의 테마가 바뀌면 theme reducer의 테마를 바꾸어준다.
    eventEmitter.on('currentModeChanged', (newMode) => {
      dispatch(themeUpdate(newMode));
    });

    init().then(() => {
      RNBootSplash.hide({duration: 1000});
    });
  }, []);

  return (
    <ThemeProvider
      theme={themeReducer.theme === 'dark' ? darkTheme : lightTheme}>
      <StatusBar
        barStyle={
          themeReducer.theme === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      {authReducer.loggedIn ? <MainScreen /> : <PublicNavigation />}
    </ThemeProvider>
  );
};

export default AppContainer;
