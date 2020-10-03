import React from 'react';
import {StyledThemeProps} from '../../styles/theme';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid
    ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
`;

const IntroScreen = () => (
  <Container>
    <TextContainer>
      <Title>intro screen</Title>
    </TextContainer>
  </Container>
);

export default IntroScreen;
