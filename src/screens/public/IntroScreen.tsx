import Carousel, {Pagination} from 'react-native-snap-carousel';
import IntroCarouselComponent, {
  Intro,
} from '../../components/IntroCarouselComponent';
import React, {useEffect, useState} from 'react';

import Constants from '../../constants/Constants';
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

const Title = styled.Text`
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props: StyledThemeProps) => props.theme.PRIMARY_TEXT_COLOR};
`;

const IntroCarouselDatas: Intro[] = [
  {
    title: 'test1',
  },
  {
    title: 'test2',
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
  return (
    <Pagination
      dotsLength={entries.length}
      activeDotIndex={activeSlide}
      containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
      dotStyle={{
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
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

const IntroScreen = () => {
  const [entries, setEntries] = useState<Intro[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    setEntries(IntroCarouselDatas);
  }, []);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const login = () => {
    console.log('로그인 버튼 클릭');
  };

  const newAccount = () => {
    console.log('회원가입 버튼 클릭');
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
