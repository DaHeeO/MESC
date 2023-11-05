import styled from 'styled-components/native';

// props로 넘기기 위해서는 interface를 만들어야 함
interface ChooseBtnProps {
  // ?의 의미는 꼭 props를 사용하지 않아도 된다.
  width?: string;
  // width: string; 이렇게하면 BtnBody에 width를 꼭 넘겨주어야함!
}

export const BtnBody = styled.View<ChooseBtnProps>`
  width: ${props => props.width || '100%'};
  height: 4%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
`;
interface SheetContainerProps {
  height?: string;
}

export const SheetContainer = styled.View<SheetContainerProps>`
  height: ${props => props.height || '100%'};
`;

export const SheetHeader = styled.View`
  // background-color: gold;
  height: 10%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const SheetBtn = styled.View`
  // background-color: blue;
  width: 10%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-right: 2%;
`;

export const SheetFncBtn = styled.TouchableOpacity`
  // background-color: blue;
  width: 10%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-right: 2%;
`;
