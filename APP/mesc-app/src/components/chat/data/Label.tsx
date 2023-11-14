import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import {colors} from '../../../components/common/theme';

type LabelItem = {
  name: string;
  labelType: string;
  query: string;
};

interface LabelComponentProps {
  label: LabelItem;
  isSelected: boolean;
  onSelect: (label: LabelItem) => void;
}

// 라벨 컴포넌트
const LabelComponent: React.FC<LabelComponentProps> = ({
  label,
  isSelected,
  onSelect,
}) => {
  // 라벨 선택시 실행할 함수
  const handleSelect = () => {
    onSelect(label);
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
    color: '#3C56A0',
    paddingVertical: 5, // 상하 패딩
    paddingHorizontal: 10, // 좌우 패딩
    borderRadius: 16, // 둥근 모서리
    overflow: 'hidden', // 모서리가 둥근 부분에서 내용이 넘치지 않도록 함
    fontSize: 14, // 텍스트 크기
    fontWeight: 'bold', // 텍스트 굵기
    textAlign: 'center', // 텍스트 가운데 정렬
    minWidth: 60,
    marginHorizontal: 5,
    height: 30,
  },

  labelStyle: {
    backgroundColor: '#3C56A0',
    color: '#F5F8FC',
    paddingVertical: 5, // 상하 패딩
    paddingHorizontal: 10, // 좌우 패딩
    borderRadius: 16, // 둥근 모서리
    overflow: 'hidden', // 모서리가 둥근 부분에서 내용이 넘치지 않도록 함
    fontSize: 14, // 텍스트 크기
    fontWeight: 'bold', // 텍스트 일반 굵기
    textAlign: 'center', // 텍스트 가운데 정렬
    minWidth: 60,
    marginHorizontal: 5,
    height: 30,
  },
});
