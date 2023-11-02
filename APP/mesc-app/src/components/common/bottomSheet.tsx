import React from 'react';
// import GestureHandlerRootView from 'react-native-gesture-handler/lib/typescript/components/GestureHandlerRootView';
import {BtnBody} from '../message/ChooseBtnStyle';
import BottomSheet from '@gorhom/bottom-sheet';
import {Text, TouchableOpacity} from 'react-native';

interface BottomSheetProps {
  title: string;
  children: React.ReactNode;
}

export const BottomSheetComponent = (props: BottomSheetProps) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const handlePress = () => {
    bottomSheetRef.current?.close(); // BottomSheet를 완전히 닫습니다.
    // 보고하기 기능 실행 등 다른 작업을 수행합니다.
  };
  return (
    <>
      <BtnBody>
        <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
          <Text>{props.title}</Text>
        </TouchableOpacity>
      </BtnBody>

      <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={['60%']}>
        <TouchableOpacity onPress={handlePress}>
          {props.children}
        </TouchableOpacity>
      </BottomSheet>
    </>
  );
};
