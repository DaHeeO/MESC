import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {colors} from '../../../components/common/theme';

type LabelType = {
  id: number;
  name: string;
  sequence: number;
  labelType: string; // 'q'와 't'라는 문자 리터럴 타입을 사용했습니다. 실제 사용하는 라벨 타입에 맞게 수정해주세요.
};

interface LabelComponentProps {
  label: LabelType;
  isSelected: boolean;
  onSelect: (name: string) => void; // onSelect 함수의 타입을 (name: string) => void 로 정의
}

// 라벨 컴포넌트
const LabelComponent: React.FC<LabelComponentProps> = ({
  label,
  isSelected,
  onSelect,
}) => {
  // 라벨 선택시 실행할 함수
  const handleSelect = () => {
    onSelect(label.name);

    // axios 요청을 보내는 함수를 여기서 실행하거나 onSelect 함수 안에서 실행할 수 있습니다.
    // try {
    //   const response = await axios(/* ... */);
    //   // 요청 후 처리
    // } catch (error) {

    //   // 에러 처리
    // }
  };

  return (
    <TouchableOpacity onPress={handleSelect}>
      <Text style={isSelected ? styles.activeLabelStyle : styles.labelStyle}>
        {label.name}
      </Text>
    </TouchableOpacity>
  );
};

export default LabelComponent;

// 스타일 정의
const styles = StyleSheet.create({
  activeLabelStyle: {
    backgroundColor: '#F5F8FC',
    color: '#5D5FEF',
    paddingVertical: 5, // 상하 패딩
    paddingHorizontal: 10, // 좌우 패딩
    borderRadius: 16, // 둥근 모서리
    overflow: 'hidden', // 모서리가 둥근 부분에서 내용이 넘치지 않도록 함
    fontSize: 13, // 텍스트 크기
    fontWeight: 'bold', // 텍스트 굵기
    textAlign: 'center', // 텍스트 가운데 정렬
    minWidth: 60,
    marginHorizontal: 5,
    height: 30,
  },
  labelStyle: {
    backgroundColor: '#5D5FEF',
    color: '#F5F8FC',
    paddingVertical: 5, // 상하 패딩
    paddingHorizontal: 10, // 좌우 패딩
    borderRadius: 16, // 둥근 모서리
    overflow: 'hidden', // 모서리가 둥근 부분에서 내용이 넘치지 않도록 함
    fontSize: 13, // 텍스트 크기
    fontWeight: 'normal', // 텍스트 일반 굵기
    textAlign: 'center', // 텍스트 가운데 정렬
    minWidth: 60,
    marginHorizontal: 5,
    height: 30,
  },
});
