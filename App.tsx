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
import React, {useEffect, useState} from 'react';
import {darkTheme, lightTheme} from './src/styles/theme';
import styled, {ThemeProvider} from 'styled-components/native';

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

const App = () => {
  const [themeState, setThemeState] = useState<ThemeType>('light');

  useEffect(() => {
    RNBootSplash.hide({duration: 500});

    if (Appearance.getColorScheme() === 'dark') {
      setThemeState('dark');
    } else {
      setThemeState('light');
    }

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
    <>
      <StatusBar
        barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
      />
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        <Container>
          <TextContainer>
            <Title>Themed App with React Native & Styled Components</Title>
          </TextContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
