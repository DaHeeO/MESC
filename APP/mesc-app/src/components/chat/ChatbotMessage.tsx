import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as S from './ChatbotMessage.styles';

interface ChatbotMessageProps {
  context: string;
}

// 동적으로 width를 설정하기 위한 함수
// function DynamicWidth(context: string) {
//   const [dynamicWidth, setDynamicWidth] = useState<number>(250);
//   console.log('초기' + dynamicWidth);

//   useEffect(() => {
//     const lines = context.split('\n');

//     const maxLength = Math.max(...lines.map(line => line.length));
//     console.log(maxLength);

//     if (maxLength * 10 < 250) {
//       // 만약 가장 긴 줄의 길이가 width 미만이라면 동적으로 width를 재설정
//       setDynamicWidth(maxLength * 10);
//       console.log('마지막' + maxLength * 10);
//     } else {
//       setDynamicWidth(250);
//     }
//   }, [context]);

//   return dynamicWidth;
// }

function ChatbotMessage({context}: ChatbotMessageProps) {
  const [dynamicWidth, setDynamicWidth] = useState<number>(250);

  useEffect(() => {
    const lines = context.split('\n');

    const maxLength = Math.max(...lines.map(line => line.length));

    if (maxLength * 10 < 250) {
      // 만약 가장 긴 줄의 길이가 width 미만이라면 동적으로 width를 재설정
      if (maxLength * 10 < 250) {
        setDynamicWidth(maxLength * 10);
      } else {
        setDynamicWidth(250);
      }
    } else {
      setDynamicWidth(250);
    }
  }, [context]);

  return (
    <S.MescContainer style={{width: dynamicWidth + 30}}>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          marginBottom: 5,
        }}>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'left',
            fontWeight: 'bold',
          }}>
          {context}
        </Text>
      </View>
    </S.MescContainer>
  );
}

export default ChatbotMessage;
