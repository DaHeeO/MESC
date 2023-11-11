import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as S from './UserMessage.styles';

// interface UserMessageProps {
//   message: string;
// }

function UserMessage(props: {message: string}) {
  const [dynamicWidth, setDynamicWidth] = useState<number>(0);

  useEffect(() => {
    const lines = props.message.split('\n');

    const maxLength = Math.max(...lines.map(line => line.length));

    if (maxLength * 10 < 200) {
      // 만약 가장 긴 줄의 길이가 width 미만이라면 동적으로 width를 재설정
      if (maxLength * 10 < 200) {
        setDynamicWidth(maxLength * 10);
      } else {
        setDynamicWidth(200);
      }
    } else {
      setDynamicWidth(200);
    }
  }, []);

  return (
    <S.UserMessage style={{width: dynamicWidth + 30}}>
      <S.TextBox>
        <Text
          style={{
            textAlign: 'left',
            color: 'white',
            letterSpacing: 1,
            margin: 5,
          }}>
          {props.message}
        </Text>
      </S.TextBox>
    </S.UserMessage>
  );
}

export default UserMessage;
