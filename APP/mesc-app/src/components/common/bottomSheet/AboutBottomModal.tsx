import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BtnBody} from './BottomSheetStyle';

//interface
interface BottomSheetProps {
  btnTitle: string;
  width?: string;
  //   모달 전체 높이
  modalHeight: string;
  // 모달 닫힐 때 한번
  modalBreakPoint: string;
  component: React.ReactNode;
  onModalShow?: () => void;
  onModalHide?: () => void;
}

export const AboutBottomSheetModal = (props: BottomSheetProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables (여기서 모달높이 조절)
  const snapPoints = useMemo(
    () => [`${props.modalBreakPoint}`, `${props.modalHeight}`],
    [],
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    props.onModalShow?.();
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModal = useCallback(() => {
    props.onModalHide?.(); // 모달이 숨겨질 때 부모 컴포넌트 함수 호출
  }, [props.onModalHide]);

  const handleSheetChanges = useCallback(
    (index: number) => {
      // console.log('handleSheetChanges', index);
      // 모달이 완전히 닫혔을 때
      if (index === 0) {
        props.onModalHide?.();
      }
    },
    [snapPoints, props.onModalHide],
  );

  // renders
  return (
    <BottomSheetModalProvider>
      <>
        <BtnBody width="auto" onPress={handlePresentModalPress}>
          <Text>{props.btnTitle}</Text>
        </BtnBody>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onDismiss={handleDismissModal} // 모달이 닫힐 때 콜백
        >
          <View style={styles.contentContainer}>{props.component}</View>
        </BottomSheetModal>
      </>
    </BottomSheetModalProvider>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
