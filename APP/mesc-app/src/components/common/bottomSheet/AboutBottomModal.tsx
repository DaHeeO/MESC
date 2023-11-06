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
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
          onChange={handleSheetChanges}>
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
