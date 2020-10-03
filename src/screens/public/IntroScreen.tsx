import React from 'react';
import {StyledThemeProps} from '../../styles/theme';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex: 4;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  width: 100%;
`;
const BottomContainer = styled.View`
  flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BUTTON_COLOR};
  width: 150px;
  height: 50px;
  justify-content: center;
  border-radius: 7px;
`;
const Button = styled.Button``;

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

const IntroScreen = () => {
  const login = () => {
    console.log('로그인 버튼 클릭');
  };

  const newAccount = () => {
    console.log('회원가입 버튼 클릭');
  };

  return (
    <Container>
      <TopContainer>
        <Title>Top</Title>
      </TopContainer>
      <BottomContainer>
        <ButtonContainer>
          <Button color={'white'} onPress={login} title={'로그인'} />
        </ButtonContainer>
        <View style={{width: 30}} />
        <ButtonContainer>
          <Button color={'white'} onPress={newAccount} title={'회원가입'} />
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default IntroScreen;
