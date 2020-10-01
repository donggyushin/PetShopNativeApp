/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import RNBootSplash from 'react-native-bootsplash';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 500});
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Splash screen</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
