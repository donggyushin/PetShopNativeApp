import React from 'react';
import {StyledThemeProps} from '../styles/theme';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  height: 100%;
`;

const Title = styled.Text`
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
`;

export type Intro = {
  title: string;
};

interface Props {
  intro: Intro;
}

const IntroCarouselComponent: React.FunctionComponent<Props> = ({intro}) => {
  return (
    <Container>
      <Title>{intro.title}</Title>
    </Container>
  );
};

export default IntroCarouselComponent;
