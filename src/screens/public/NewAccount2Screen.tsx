import { StyledThemeProps, darkTheme } from '../../styles/theme';

import Constants from '../../constants/Constants';
import React from 'react'
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  align-items: center;
`
const VerifyButton = styled.Text`
  color: ${darkTheme.PRIMARY_TEXT_COLOR};
  font-size: ${Constants.fontSize.text};
`;

const NewAccount2Screen = () => {
 return (
  <Container>
   <VerifyButton>
   New Account 2
   </VerifyButton>
  </Container>
 )
}

export default NewAccount2Screen