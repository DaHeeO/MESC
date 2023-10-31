import React, {useEffect, useState, useRef} from 'react';
import {FlatList, Animated, Dimensions} from 'react-native';
import * as S from './OnBoarding.styles';
import OnBoardingItem from './OnBoardingItem';

interface IOnBoarding {
  pages: any[];
  onButtonPress: () => void;
}

export default function OnBoarding({pages, onButtonPress}: IOnBoarding) {
  function renderItem({item}: any) {
    return <OnBoardingItem item={item} />;
  }

  const [page, setPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const pagesRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const SCREEN_WIDTH = Dimensions.get('window').width * 0.8;

  const [shouldShowButton, setShouldShowButton] = useState(false);

  useEffect(() => {
    // 페이지가 오른쪽 끝에 도달하면 버튼을 표시
    if (page === pages.length - 1) {
      setShouldShowButton(true);
    } else {
      setShouldShowButton(false);
    }
  }, [page, pages.length]);

  return (
    <S.Container style={{flex: 3}}>
      <FlatList
        data={pages}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.num}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
        ref={pagesRef}
        onMomentumScrollEnd={event => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const currentIndex = Math.floor(offsetX / SCREEN_WIDTH);
          setPage(currentIndex);
        }}
      />
      <S.IndicatorWrapper>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <S.Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </S.IndicatorWrapper>
      <S.Bottom>
        {shouldShowButton && (
          <S.Button onPress={onButtonPress}>
            <S.ButtonText>시작하기</S.ButtonText>
          </S.Button>
        )}
      </S.Bottom>
    </S.Container>
  );
}
