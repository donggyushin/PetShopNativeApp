import {darkTheme, lightTheme} from '../../styles/theme';

import IntroScreen from '../../screens/public/IntroScreen';
import {LoggedOutStackParamList} from './PublicOutNavigationType';
import NewAccount2Screen from '../../screens/public/NewAccount2Screen';
import NewAccount3Screen from '../../screens/public/NewAccount3Screen';
import NewAccountScreen from '../../screens/public/NewAccountScreen';
import React from 'react';
import {StoreType} from '../../store';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

const LoggedOutStack = createStackNavigator<LoggedOutStackParamList>();

const PublicNavigation = () => {
  const themeReducer = useSelector((state: StoreType) => state.ThemeReducer);
  const gestureEnabledReducer = useSelector(
    (state: StoreType) => state.GestureEnabledReducer,
  );
  return (
    <LoggedOutStack.Navigator
      screenOptions={{
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
        gestureEnabled: gestureEnabledReducer.gesture,
      }}>
      <LoggedOutStack.Screen
        name={'Intro'}
        options={{headerShown: false, title: '펫밀리'}}
        component={IntroScreen}
      />
      <LoggedOutStack.Screen
        name={'NewAccount'}
        options={{
          title: '본인인증',
          headerBackTitle: '이전',
        }}
        component={NewAccountScreen}
      />
      <LoggedOutStack.Screen
        name={'NewAccount2'}
        options={{
          title: '아이디를 입력해주세요',
          headerLeft: () => null,
        }}
        component={NewAccount2Screen}
      />
      <LoggedOutStack.Screen
        name={'NewAccount3'}
        options={{
          title: '비밀번호를 입력해주세요',
          headerBackTitle: '이전',
        }}
        component={NewAccount3Screen}
      />
    </LoggedOutStack.Navigator>
  );
};

export default PublicNavigation;
