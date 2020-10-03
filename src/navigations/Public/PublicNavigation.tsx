import IntroScreen from '../../screens/public/IntroScreen';
import {LoggedOutStackParamList} from './PublicOutNavigationType';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const LoggedOutStack = createStackNavigator<LoggedOutStackParamList>();

const PublicNavigation = () => (
  <LoggedOutStack.Navigator>
    <LoggedOutStack.Screen
      name={'Intro'}
      options={{headerShown: false}}
      component={IntroScreen}
    />
  </LoggedOutStack.Navigator>
);

export default PublicNavigation;
