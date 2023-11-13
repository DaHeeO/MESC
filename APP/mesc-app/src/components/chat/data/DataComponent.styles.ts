import styled from 'styled-components/native';

export const DataContainer = styled.View`
  // border: 1px solid red;
  border-radius: 6px;
  width: 100%;
  // height: 500px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

interface DataBoxProps {
  width?: string;
  height?: string;
}

export const DataSection = styled.View<DataBoxProps>`
  border: 1px solid blue;
  box-sizing: border-box;
  // width: {props => props.width};
  // height: {props => props.height};
  // justify-content: center;
  margin-top: 10px;
}`;

export const LabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  // border: 1px solid aqua;
  height: 30px;
`;

export const ModalContainer = styled.View`
  border: 1px solid red;
  border-radius: 6px;
  width: 100%;
  height: 300px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;
