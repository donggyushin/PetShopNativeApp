import IntroScreen from '../../screens/public/IntroScreen';
import {LoggedOutStackParamList} from './PublicOutNavigationType';
import {NewAccountOptions} from './PublicNavigationOptions';
import NewAccountScreen from '../../screens/public/NewAccountScreen';
import React from 'react';
import {StoreType} from '../../store';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const LoggedOutStack = createStackNavigator<LoggedOutStackParamList>();

const PublicNavigation = () => {
  const themeReducer = useSelector((state: StoreType) => state.ThemeReducer);

  return (
    <LoggedOutStack.Navigator>
      <LoggedOutStack.Screen
        name={'Intro'}
        options={{headerShown: false, title: '이전'}}
        component={IntroScreen}
      />
      <LoggedOutStack.Screen
        name={'NewAccount'}
        options={() => NewAccountOptions(themeReducer)}
        component={NewAccountScreen}
      />
    </LoggedOutStack.Navigator>
  );
};

export default PublicNavigation;
