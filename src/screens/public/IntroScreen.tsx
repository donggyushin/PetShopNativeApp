import Carousel, {Pagination} from 'react-native-snap-carousel';
import IntroCarouselComponent, {
  Intro,
} from '../../components/IntroCarouselComponent';
import React, {useEffect, useState} from 'react';
import {StyledThemeProps, darkTheme, lightTheme} from '../../styles/theme';

import Constants from '../../constants/Constants';
import {IntroScreenProps} from '../../navigations/Public/PublicOutNavigationType';
import {StoreType} from '../../store';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex: 6;
  background-color: ${(props: StyledThemeProps) =>
    props.theme.PRIMARY_BACKGROUND_COLOR};
  width: 100%;
  align-items: center;
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

const IntroCarouselDatas: Intro[] = [
  {
    title: '펫샵의 동물들은 과연 행복한가요?',
    texts: [
      '펫샵은 반려동물과 관련된 모든 물품과',
      '서비스를 구매할 수 있는 곳이에요',
      '장난감, 액세서리, 샴푸, 브러시 등의 물품은 물론',
      '사료나 간식을 살 수 있고,',
      '미용 서비스도 이용할 수 있어요',
      '일부 펫샵에서는 동물을 직접 분양하기도 한답니다.',
    ],
  },
  {
    title: '펫샵 동물들의 비참함',
    texts: [
      '하지만 반려동물의 복지에 관심이 많은',
      '사람들은 펫샵에서 동물을 입양하는 것에',
      '부정적이에요. ',
    ],
  },
  {
    title: '건강',
    texts: [
      '우선 펫샵의 동물들은 건강관리를 제대로 받지 못해요',
      '너무 어릴 때부터 어미와 떨어져 면역력이 약한 데다,',
      '좁은 공간에 수많은 새끼 동물들이',
      '섞여 있으니 전염병이 금방 퍼지게 돼요',
    ],
  },
  {
    title: '강아지 농장',
    texts: [
      '제가 멍샵을 만들게 된 가장 큰 이유에요',
      ' ',
      `펫샵으로 오는 새끼 동물들은 대부분 '농장' 에서 태어나요`,
      `'강아지 농장', '고양이 농장'`,
      '이라고 불리는 이런 농장은',
      '어미 동물을 가둬두고 출산만 시키는 구조에요',
      '어미 동물의 건강도 좋지 않은 상태이며,',
      '새끼들은 제대로 젖을 먹지도',
      '못한 채 펫샵으로 팔려나가게 되요.',
    ],
  },
  {
    title: '단계적인 폐지가 필요',
    texts: [
      '우선 펫샵에서 동물을 입양하지',
      '않는 것이 중요해요.',
      '펫샵에서는 물품만 구입하고,',
      '동물은 다른 방법으로 입양하도록 해요',
    ],
  },
  {
    title: '멍샵',
    texts: [
      '동물을 입양할 수 있는 통합된',
      '하나의 플랫폼이 갖추어지게 된다면',
      '펫샵을 이용하지 않고도',
      '소중한 새 가족을 입양할 수 있어요.',
    ],
  },
];

interface PaginationProps {
  entries: Intro[];
  activeSlide: number;
}

const PaginationComponent: React.FunctionComponent<PaginationProps> = ({
  entries,
  activeSlide,
}) => {
  const themeReducer = useSelector((state: StoreType) => state.ThemeReducer);

  return (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      containerStyle={{
        backgroundColor:
          themeReducer.theme === 'dark'
            ? darkTheme.PRIMARY_BACKGROUND_COLOR
            : lightTheme.PRIMARY_BACKGROUND_COLOR,
      }}
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 0,
        backgroundColor:
          themeReducer.theme === 'dark'
            ? darkTheme.PRIMARY_TEXT_COLOR
            : lightTheme.PRIMARY_TEXT_COLOR,
      }}
      inactiveDotStyle={
        {
          // Define styles for inactive dots here
        }
      }
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.8}
    />
  );
};

const IntroScreen = ({navigation, route}: IntroScreenProps) => {
  const [entries, setEntries] = useState<Intro[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    setEntries(IntroCarouselDatas);
  }, []);

  const login = () => {
    console.log('로그인 버튼 클릭');
  };

  const newAccount = () => {
    navigation.navigate('NewAccount');
  };

  return (
    <Container>
      <TopContainer>
        <Carousel
          data={IntroCarouselDatas}
          renderItem={(item: {item: Intro; index: number}) => (
            <IntroCarouselComponent intro={item.item} />
          )}
          sliderWidth={Constants.deviceWidth}
          itemWidth={Constants.deviceWidth}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <PaginationComponent entries={entries} activeSlide={activeSlide} />
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
