import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type LoggedOutStackParamList = {
  Intro: undefined;
  NewAccount: undefined;
  NewAccount2: {
    phoneNumber:string
  }
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
