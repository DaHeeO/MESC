import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

type CheckboxProps = {
  checked: boolean;
};

export const LogLevelFormContainer = styled.View`
  flex: 1;
  // border: 1px solid red;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  border-bottom-width: 1px;
  border-bottom-color: black;
  padding-bottom: 10px;
`;

export const ButtonBox = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 20px;
  // background-color: red;
`;

export const Button = styled.View`
  background-color: #3c56a0;
  height: 30px;
  width: 60px;
  border-radius: 14px; // 라운드 모양을 주기 위해 border-radius 추가
  align-self: flex-end; // 부모 컨테이너의 오른쪽에 붙이기 위해 align-self 추가
  justify-content: center; // 버튼 안의 내용물을 중앙 정렬하기 위해 justify-content 추가
  align-items: center; // 버튼 안의 내용물을 중앙 정렬하기 위해 align-items 추가
  margin-right: 10px;
`;

export const LogLevelItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-width: 1px;
  border-color: ${colors.quaternary};
  // border: 1px solid green;
  margin-left: 20px;
  margin-right: 20px;
`;

export const LogLevelText = styled.Text`
  font-size: 18px;
  color: ${colors.primary};
`;

export const CheckboxContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  // border-color: red;
`;

export const CheckboxLabel = styled.Text`
  margin-left: 8px;
  font-size: 16px;
`;

// 이 스타일은 체크 상태에 따라 색상을 다르게 표시할 때 사용할 수 있습니다.
export const Checkbox = styled.View<CheckboxProps>`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${colors.iris}; // 직접 colors 객체에서 icy 색상 사용
  align-items: center;
  justify-content: center;
`;
