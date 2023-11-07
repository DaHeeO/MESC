import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {TouchableOpacity, Text} from 'react-native';
import {BtnBody} from '../bottomSheet/BottomSheetStyle';

interface ChatBtnProps {
  width?: string;
  btnTitle: string;
}

export const AboutChatBtn = (props: ChatBtnProps) => {
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  return (
    /* bottomSheet를 띄우기 위한 Btn */
    <BtnBody width={props.width}>
      <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
        {/* Btn의 이름 */}
        <Text>{props.btnTitle}</Text>
      </TouchableOpacity>
    </BtnBody>
  );
};
