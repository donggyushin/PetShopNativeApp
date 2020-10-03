import React from 'react';
import {StyledThemeProps} from '../../styles/theme';
import Title from '../../components/fonts/Title';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const NewAccountScreen = () => (
  <Container>
    <Title text={'회원가입 페이지'} />
  </Container>
);

export default NewAccountScreen;
