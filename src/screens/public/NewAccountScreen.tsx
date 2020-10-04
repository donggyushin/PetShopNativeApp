import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {StyledThemeProps, darkTheme, lightTheme} from '../../styles/theme';

import Constants from '../../constants/Constants';
import DismissKeyboard from '../../components/DismissKeyboard';
import {StoreType} from '../../store';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  align-items: center;
`;

const PhoneNumber = styled.TextInput.attrs({
  keyboardType: 'number-pad',
})<{width: number}>`
  font-size: ${Constants.fontSize.title};
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => props.width + 'px'};
  text-align: center;
`;

const PhoneNumberContainer = styled.View`
  border-bottom-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const VerificationButton = styled.Button``;
const VerificationButtonContainer = styled.View`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
`;
const DisabledVerificationButtonContainer = styled.View`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.SECONDARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
`;

const VerificationCodeTextInput = styled.TextInput.attrs({
  keyboardType: 'number-pad',
})<{width: number}>`
  font-size: ${Constants.fontSize.title};
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => props.width + 'px'};
  text-align: center;
`;

const VerificationCodeTextInputContainer = styled.View`
  border-bottom-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
`;

const VerifyButton = styled.Text`
  color: ${darkTheme.PRIMARY_TEXT_COLOR};
  font-size: ${Constants.fontSize.text};
`;
const VerifyButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
  align-items: center;
`;
const DisabledVerifyButtonContainer = styled.View`
  background-color: ${(props: StyledThemeProps) =>
    props.theme.SECONDARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
  align-items: center;
`;

const NextPageText = styled.Text`
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${Constants.fontSize.text};
`;
const NextPageTextContainer = styled.TouchableOpacity``;

const NewAccountScreen = () => {
  const [phone1, setPhone1] = useState<string>('');
  const [phone2, setPhone2] = useState<string>('');
  const [phone3, setPhone3] = useState<string>('');

  const [phone2Ref, setPhone2Ref] = useState<TextInput | null>();
  const [phone3Ref, setPhone3Ref] = useState<TextInput | null>();

  const [phoneVerified, setPhoneVerified] = useState<boolean>(false);

  const [verificationCode, setVerificationCode] = useState<string>('');
  const [verificationCodeComplete, setVerificationCodeComplete] = useState<
    boolean
  >(false);

  const [verified, setVerified] = useState<boolean>(true);

  const requestVerificationCodeToServer = () => {
    Keyboard.dismiss();
    console.log('인증 요청 보내기');
  };

  const handlePhone1 = (text: string) => {
    if (text.length <= 3) {
      setPhone1(text);
      checkPhoneVerification(text, phone2, phone3);
      if (text.length === 3) {
        phone2Ref?.focus();
      }
    }
  };

  const handlePhone2 = (text: string) => {
    if (text.length <= 4) {
      setPhone2(text);
      checkPhoneVerification(phone1, text, phone3);
      if (text.length === 4) {
        phone3Ref?.focus();
      }
    }
  };

  const handlePhone3 = (text: string) => {
    if (text.length <= 4) {
      setPhone3(text);
      checkPhoneVerification(phone1, phone2, text);
    }
  };

  const checkPhoneVerification = (
    phone1: string,
    phone2: string,
    phone3: string,
  ) => {
    const phoneNumber = `${phone1}${phone2}${phone3}`;
    const regExp = /^\d{3}\d{4}\d{4}$/;
    setPhoneVerified(regExp.test(phoneNumber));
  };

  const handleVerificationCode = (text: string) => {
    setVerificationCode(text);
    if (text.length === 6) {
      setVerificationCodeComplete(true);
    } else {
      setVerificationCodeComplete(false);
    }
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Container>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Row>
              <PhoneNumberContainer>
                <PhoneNumber
                  value={phone1}
                  onChangeText={handlePhone1}
                  width={50}
                  placeholder={'010'}
                  maxLength={3}
                />
              </PhoneNumberContainer>
              <View style={{width: 20}} />
              <PhoneNumberContainer>
                <PhoneNumber
                  value={phone2}
                  onChangeText={handlePhone2}
                  ref={(input) => setPhone2Ref(input)}
                  width={70}
                  placeholder={'1234'}
                  maxLength={4}
                />
              </PhoneNumberContainer>
              <View style={{width: 20}} />
              <PhoneNumberContainer>
                <PhoneNumber
                  ref={(input) => setPhone3Ref(input)}
                  width={70}
                  placeholder={'5678'}
                  maxLength={4}
                  onChangeText={handlePhone3}
                />
              </PhoneNumberContainer>
            </Row>
            {phoneVerified ? (
              <VerificationButtonContainer
                style={{
                  marginTop: 20,
                }}>
                <VerificationButton
                  title={'인증요청'}
                  color={darkTheme.PRIMARY_TEXT_COLOR}
                  onPress={requestVerificationCodeToServer}
                />
              </VerificationButtonContainer>
            ) : (
              <DisabledVerificationButtonContainer
                style={{
                  marginTop: 20,
                }}>
                <VerificationButton
                  title={'인증요청'}
                  onPress={requestVerificationCodeToServer}
                  disabled={true}
                />
              </DisabledVerificationButtonContainer>
            )}
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <VerificationCodeTextInputContainer>
              <VerificationCodeTextInput
                onChangeText={handleVerificationCode}
                maxLength={6}
                value={verificationCode}
                width={230}
                placeholder={'598273'}
              />
            </VerificationCodeTextInputContainer>
            {verificationCodeComplete ? (
              <VerifyButtonContainer
                style={{
                  marginTop: 20,
                }}>
                <VerifyButton>인증하기</VerifyButton>
              </VerifyButtonContainer>
            ) : (
              <DisabledVerifyButtonContainer
                style={{
                  marginTop: 20,
                }}>
                <VerifyButton>인증하기</VerifyButton>
              </DisabledVerifyButtonContainer>
            )}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            {verified && (
              <NextPageTextContainer>
                <NextPageText>다음 페이지로 가기</NextPageText>
              </NextPageTextContainer>
            )}
          </View>
        </Container>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export default NewAccountScreen;
