import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  align-items: center;
  justify-content: center;
`;

const NewAccount3Screen = () => {
  return (
    <Container>
      <Text
        style={{
          color: 'white',
        }}>
        New Account 3 screen
      </Text>
    </Container>
  );
};

export default NewAccount3Screen;
