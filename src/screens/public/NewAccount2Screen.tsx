import {
  Alert,
  AlertButton,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {
  gestureEnabledFalse,
  gestureEnabledTrue,
} from '../../actions/GestureEnabledActions';

import Axios from 'axios';
import Constants from '../../constants/Constants';
import DismissKeyboard from '../../components/DismissKeyboard';
import {NewAccount2Props} from '../../navigations/Public/PublicOutNavigationType';
import {PETSHOP_API} from '../../config/configurations';
import {UserType} from '../../types/Types';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  align-items: center;
  justify-content: center;
`;

const TextInputID = styled.TextInput`
  width: 80%;
  border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
  font-size: ${Constants.fontSize.title};
  height: 50px;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  text-align: center;
`;

const NewAccount2Screen = ({route, navigation}: NewAccount2Props) => {
  const dispatch = useDispatch();

  const [id, setId] = useState<string>('');
  const [validId, setValidId] = useState(false);

  useFocusEffect(
    // 해당 스크린으로 넘어오면 제스쳐로 돌아가지 못하게 막음
    React.useCallback(() => {
      dispatch(gestureEnabledFalse());
      return () => dispatch(gestureEnabledTrue());
    }, []),
  );

  const handleId = (text: string) => {
    const idReg = Constants.idReg;

    setId(text);
    console.log(text);
    setValidId(idReg.test(text).valueOf());
  };

  const checkIdValuable = async () => {
    const cancleButton: AlertButton = {
      text: '취소',
      style: 'cancel',
      onPress: () => null,
    };

    const okayButton: AlertButton = {
      text: '확인',
      style: 'default',
      onPress: () => {
        console.log('다음 페이지로 넘어가기');
        Keyboard.dismiss();
        navigation.navigate('NewAccount3', {
          phoneNumber: route.params.phoneNumber,
          userId: id,
        });
      },
    };

    try {
      const response = await Axios.get(
        `${PETSHOP_API}/api/v1/user/userId?userId=${id}`,
      );
      const {ok, user} = response.data as {
        ok: boolean;
        user?: UserType;
      };

      if (!ok) {
        return Alert.alert(
          '죄송합니다!',
          '내부적으로 알 수 없는 에러가 발생하였습니다. ',
        );
      }

      if (user) {
        return Alert.alert(
          '죄송합니다!',
          '이미 존재하는 유저입니다. 다른 아이디를 이용해주세요',
        );
      }

      Alert.alert(
        '사용가능한 아이디입니다!',
        '해당 아이디를 사용하시겠습니까? ',
        [cancleButton, okayButton],
      );
    } catch (err) {
      console.log(err.message);
      const {message, error} = err.response.data;
      console.error(`Error type: ${error}`);
      Alert.alert('죄송합니다!', message);
    }
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Container>
          <TextInputID
            autoFocus={true}
            maxLength={15}
            value={id}
            onChangeText={handleId}
          />
          {validId ? (
            <Button onPress={checkIdValuable} title={'사용하기'} />
          ) : undefined}
        </Container>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export default NewAccount2Screen;
