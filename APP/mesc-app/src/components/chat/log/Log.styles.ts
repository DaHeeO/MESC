import styled from 'styled-components/native';

const getLevelColor = (level: string) => {
  switch (level) {
    case 'TRACE':
      return '#7879F1';
    case 'DEBUG':
      return '#7879F1';
    case 'INFO':
      return '#5B8D2A';
    case 'WARN':
      return '#A68A0D';
    case 'ERROR':
      return '#EF4E40';
    default:
      return '#5B8D2A'; // 기본 색상
  }
};

// 로그 레벨에 따라 스타일이 변경되는 로그 텍스트 컴포넌트를 정의합니다.
export const LogText = styled.Text<{level: string}>`
  color: ${({level}) => getLevelColor(level)};
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
`;

// 기본 텍스트 스타일
export const DefaultText = styled.Text`
  color: #bbbbbb;
`;

// 로그 컨테이너 스타일 정의
export const LogContainer = styled.View`
  flex: 1;
  margin-top: 10px;
  padding: 5px;
  border-radius: 6px;
  width: 100%;
  height: auto;
  max-height: 170px;
  background-color: #2b2b2b;
  // border: 1px solid red;
`;

// 로그 아이템 스타일 정의
export const LogItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; // space-between 대신 시작 부분에 항목들을 정렬
  padding: 10px;
  margin: 1px;
  border-radius: 5px;
  background-color: #2b2b2b;
  // border: 1px solid yellow;
`;

// 로거 텍스트 스타일 정의, 로거 이름에 대한 텍스트는 파란색으로 표시합니다.
export const LoggerText = styled.Text`
  color: #00a3a3;
  margin-left: 5px;
  margin-right: 5px;
`;
