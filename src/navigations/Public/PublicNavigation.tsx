import IntroScreen from '../../screens/public/IntroScreen';
import {LoggedOutStackParamList} from './PublicOutNavigationType';
import NewAccountScreen from '../../screens/public/NewAccountScreen';
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
    <LoggedOutStack.Screen name={'NewAccount'} component={NewAccountScreen} />
  </LoggedOutStack.Navigator>
);

export default PublicNavigation;
