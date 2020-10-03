/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {Appearance, StatusBar} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {authLoggedInFalse, authLoggedInTrue} from './src/actions/AuthActions';
import {darkTheme, lightTheme} from './src/styles/theme';
import store, {StoreType} from './src/store';
import styled, {ThemeProvider} from 'styled-components/native';

import AsyncStorage from '@react-native-community/async-storage';
import RNBootSplash from 'react-native-bootsplash';
import {ThemeType} from './src/types/Types';
import {eventEmitter} from 'react-native-dark-mode';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;

declare const global: {HermesInternal: null | {}};

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => {
  const [themeState, setThemeState] = useState<ThemeType>('dark');
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
    console.log(Appearance.getColorScheme());

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

    init().then(() => {
      RNBootSplash.hide({duration: 500});
    });
  }, []);

  return (
    <>
      <StatusBar
        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        <Container>
          <TextContainer>
            <Title>{authReducer.loggedIn ? 'logged in' : 'logged out'}</Title>
          </TextContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AppContainer;
