import Constants from '../constants/Constants';
import React from 'react';
import {StyledThemeProps} from '../styles/theme';
import Text from './fonts/Text';
import Title from './fonts/Title';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  height: 100%;
`;

export type Intro = {
  title: string;
  texts: string[];
};

interface Props {
  intro: Intro;
}

const IntroCarouselComponent: React.FunctionComponent<Props> = ({intro}) => {
  return (
    <Container>
      <View
        style={{
          alignItems: 'center',
          height: 80,
          justifyContent: 'center',
        }}>
        <Title text={intro.title} />
      </View>
      <View
        style={{
          height: 250,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text text={'이미지 준비중'} />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {intro.texts.map((text, index) => (
          <Text key={index} text={text} />
        ))}
      </View>
    </Container>
  );
};

export default IntroCarouselComponent;
