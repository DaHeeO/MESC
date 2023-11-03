import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  BtnBody,
  SheetBtn,
  SheetContainer,
  SheetFncBtn,
  SheetHeader,
} from './bottomSheetStyle';

interface BottomSheetProps {
  btnTitle: string;
  sheetTitle: string;
  width?: string;
  component: React.ReactNode;
}

export const BottomSheetComponent = (props: BottomSheetProps) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const handlePress = () => {
    bottomSheetRef.current?.close();
    // 다른 작업을 수행할 수 있습니다.
  };
  return (
    <>
      {/* bottomSheet를 띄우기 위한 Btn */}
      <BtnBody width={props.width}>
        <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
          {/* Btn의 이름 */}
          <Text>{props.btnTitle}</Text>
        </TouchableOpacity>
      </BtnBody>

      {/* bottomSheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['75%']}
        enableContentPanningGesture={true}>
        <SheetContainer>
          {/* bottomSheet안에 들어가는 컴포넌트 */}
          <SheetHeader>
            <SheetBtn />
            {/* bottomSheet 제목 */}
            <SheetFncBtn onPress={handlePress}>
              <Text style={{fontWeight: 'bold'}}>{props.sheetTitle}</Text>
            </SheetFncBtn>
            <SheetFncBtn onPress={handlePress}>
              <Text style={{fontWeight: 'bold'}}>OK</Text>
            </SheetFncBtn>
          </SheetHeader>
          <SheetContainer height="90%">{props.component}</SheetContainer>
        </SheetContainer>
      </BottomSheet>
    </>
  );
};

export default BottomSheetComponent;
