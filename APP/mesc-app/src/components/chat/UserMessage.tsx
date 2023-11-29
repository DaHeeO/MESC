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

    const minWidth = 60; // 최소 길이
    const maxWidth = 250; // 최대 길이

    const dynamicWidth = maxLength * 12;

    // console.log('dynamicWidth', dynamicWidth);

    if (dynamicWidth < minWidth) {
      setDynamicWidth(minWidth);
    } else if (dynamicWidth > maxWidth) {
      setDynamicWidth(maxWidth);
    } else {
      setDynamicWidth(dynamicWidth);
    }
  }, [props.message]);

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
