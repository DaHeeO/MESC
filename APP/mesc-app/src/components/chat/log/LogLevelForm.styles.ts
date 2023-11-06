import styled from 'styled-components/native';
import {colors} from '../../common/Theme';

type CheckboxProps = {
  checked: boolean;
};

export const LogLevelFormContainer = styled.View`
  flex: 1;
  border: 1px solid red;
`;
export const LogLevelItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // margin: 15px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom-width: 1px;
  border-color: ${colors.quaternary};
  // border: 1px solid green;
`;

export const LogLevelText = styled.Text`
  font-size: 18px;
  color: ${colors.primary};
`;

export const CheckboxContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
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
  background-color: ${props => (props.checked ? colors.iris : colors.iris)};
  align-items: center;
  justify-content: center;
`;

export const CheckboxInner = styled.View`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: ${colors.iris};
`;
