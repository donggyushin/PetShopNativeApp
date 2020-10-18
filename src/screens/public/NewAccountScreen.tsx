import {
  Alert,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

import Axios from 'axios';
import Constants from '../../constants/Constants';
import DismissKeyboard from '../../components/DismissKeyboard';
import {NewAccountProps} from '../../navigations/Public/PublicOutNavigationType';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {PETSHOP_API} from '../../config/configurations';
import {darkTheme} from '../../styles/theme';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  align-items: center;
`;

const PhoneNumber = styled.TextInput.attrs({
  keyboardType: 'number-pad',
})<{width: number}>`
  font-size: ${Constants.fontSize.title};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => props.width + 'px'};
  text-align: center;
`;

const PhoneNumberContainer = styled.View`
  border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const VerificationButton = styled.Button``;
const VerificationButtonContainer = styled.View`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
`;
const DisabledVerificationButtonContainer = styled.View`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
`;

const VerifyButton = styled.Text`
  color: ${darkTheme.PRIMARY_TEXT_COLOR};
  font-size: ${Constants.fontSize.text};
`;
const VerifyButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
  align-items: center;
`;
const DisabledVerifyButtonContainer = styled.View`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
  width: 234px;
  height: 40px;
  justify-content: center;
  border-radius: 7px;
  align-items: center;
`;

const NewAccountScreen = ({navigation}: NewAccountProps) => {
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

  const [
    preventRequestVerificationCode,
    setPreventRequestVerificationCode,
  ] = useState(false);

  const showAlert = (title: string, text: string) => {
    Alert.alert(
      title,
      text,
      [
        {
          text: '확인',
        },
      ],
      {cancelable: false},
    );
  };

  const requestVerificationCodeToServer = async () => {
    Keyboard.dismiss();

    if (!phoneVerified) return;

    if (preventRequestVerificationCode) return;

    setPreventRequestVerificationCode(true);

    try {
      const response = await Axios.post(`${PETSHOP_API}/api/v1/verification`, {
        phoneNumber: phone1 + phone2 + phone3,
      });

      const status = response.status;
      if (status !== 200) {
        // TODO: 에러 팝업띄워주기

        showAlert('죄송합니다', response.data.message);
        return;
      }
      const {data} = response;
      const {ok} = data as {
        ok: boolean;
      };

      if (!ok) {
        // TODO: 알수 없는 에러 띄워주기
        showAlert(
          '죄송합니다',
          '서버 내부에서 알 수 없는 에러가 발생하였습니다',
        );
        return;
      }

      // 인증요청 성공
    } catch (err) {
      showAlert('죄송합니다', err.response.data.message);
    }
  };

  const handlePhone1 = (text: string) => {
    setPreventRequestVerificationCode(false);
    if (text.length <= 3) {
      setPhone1(text);
      checkPhoneVerification(text, phone2, phone3);
      if (text.length === 3) {
        phone2Ref?.focus();
      }
    }
  };

  const handlePhone2 = (text: string) => {
    setPreventRequestVerificationCode(false);
    if (text.length <= 4) {
      setPhone2(text);
      checkPhoneVerification(phone1, text, phone3);
      if (text.length === 4) {
        phone3Ref?.focus();
      }
    }
  };

  const handlePhone3 = (text: string) => {
    setPreventRequestVerificationCode(false);
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

  const verifyCode = async () => {
    Keyboard.dismiss();

    try {
      const response = await Axios.delete(
        `${PETSHOP_API}/api/v1/verification?phoneNumber=${phone1}${phone2}${phone3}&verificationCode=${verificationCode}`,
      );

      if (response.status !== 200) {
        // TODO: 에러 팝업띄워주기

        showAlert('죄송합니다', response.data.message);
        return;
      }

      const {ok} = response.data as {
        ok: boolean;
      };

      if (!ok) {
        // TODO: 알수 없는 에러 띄워주기
        showAlert('죄송합니다', '서버로부터 알 수 없는 에러가 발생하였습니다');
        return;
      }

      // 인증성공

      goToNewAccount2Screen(response.data.verification.phoneNumber);
    } catch (err) {
      showAlert('죄송합니다', err.response.data.message);
    }
  };

  const goToNewAccount2Screen = (verifiedPhoneNumber: string) => {
    navigation.navigate('NewAccount2', {
      phoneNumber: verifiedPhoneNumber,
    });
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
                  width={60}
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
                  width={60}
                  placeholder={'1234'}
                  maxLength={4}
                />
              </PhoneNumberContainer>
              <View style={{width: 20}} />
              <PhoneNumberContainer>
                <PhoneNumber
                  ref={(input) => setPhone3Ref(input)}
                  width={60}
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
                  color={darkTheme.PRIMARY_TEXT_COLOR}
                />
              </DisabledVerificationButtonContainer>
            )}
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}>
            <OTPInputView
              style={{width: '80%', height: 100}}
              pinCount={6}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeChanged={handleVerificationCode}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
                handleVerificationCode(code);
              }}
            />
            {verificationCodeComplete ? (
              <VerifyButtonContainer>
                <VerifyButton onPress={verifyCode}>인증하기</VerifyButton>
              </VerifyButtonContainer>
            ) : (
              <DisabledVerifyButtonContainer>
                <VerifyButton>인증하기</VerifyButton>
              </DisabledVerifyButtonContainer>
            )}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}></View>
          <Button
            title={'개발용버튼'}
            onPress={() => goToNewAccount2Screen('01090411019')}
          />
        </Container>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  borderStyleHighLightedForLightTheme: {
    borderColor: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default NewAccountScreen;
