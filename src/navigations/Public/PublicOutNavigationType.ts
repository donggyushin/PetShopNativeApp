import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type LoggedOutStackParamList = {
  Intro: undefined;
  NewAccount: undefined;
  NewAccount2: {
    phoneNumber: string;
  };
  NewAccount3: {
    phoneNumber: string;
    userId: string;
  };
};

type IntroScreenNavigationProp = StackNavigationProp<
  LoggedOutStackParamList,
  'Intro'
>;
type IntroScreenRouteProp = RouteProp<LoggedOutStackParamList, 'Intro'>;

export type IntroScreenProps = {
  navigation: IntroScreenNavigationProp;
  route: IntroScreenRouteProp;
};

type NewAccountNavigationProp = StackNavigationProp<
  LoggedOutStackParamList,
  'NewAccount'
>;
type NewAccountRouteProp = RouteProp<LoggedOutStackParamList, 'NewAccount'>;

export type NewAccountProps = {
  navigation: NewAccountNavigationProp;
  route: NewAccountRouteProp;
};

type NewAccount2NavigationProp = StackNavigationProp<
  LoggedOutStackParamList,
  'NewAccount2'
>;
type NewAccount2RouteProp = RouteProp<LoggedOutStackParamList, 'NewAccount2'>;

export type NewAccount2Props = {
  navigation: NewAccount2NavigationProp;
  route: NewAccount2RouteProp;
};

type NewAccount3NavigationProp = StackNavigationProp<
  LoggedOutStackParamList,
  'NewAccount3'
>;
type NewAccount3RouteProp = RouteProp<LoggedOutStackParamList, 'NewAccount3'>;

export type NewAccount3Props = {
  navigation: NewAccount3NavigationProp;
  route: NewAccount3RouteProp;
};
