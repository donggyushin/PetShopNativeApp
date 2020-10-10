import IntroScreen from '../../screens/public/IntroScreen';
import {LoggedOutStackParamList} from './PublicOutNavigationType';
import NewAccountScreen from '../../screens/public/NewAccountScreen';
import PublichNavigationHeaderStyle from './PublicNavigationHeaderStyle';
import React from 'react';
import {StoreType} from '../../store';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const LoggedOutStack = createStackNavigator<LoggedOutStackParamList>();

const PublicNavigation = () => {
  const themeReducer = useSelector((state: StoreType) => state.ThemeReducer);

  return (
    <LoggedOutStack.Navigator
      screenOptions={() => PublichNavigationHeaderStyle(themeReducer)}>
      <LoggedOutStack.Screen
        name={'Intro'}
        options={{headerShown: false, title: '이전'}}
        component={IntroScreen}
      />
      <LoggedOutStack.Screen
        name={'NewAccount'}
        options={{
          title: '회원가입',
        }}
        component={NewAccountScreen}
      />
    </LoggedOutStack.Navigator>
  );
};

export default PublicNavigation;
