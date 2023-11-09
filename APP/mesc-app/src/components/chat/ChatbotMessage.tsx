import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import * as S from './ChatbotMessage.styles';
import {cardState} from '../../states/CardState';
import {useRecoilValue} from 'recoil';
import {Card} from '../../states/CardState';

function ChatbotMessage(props: {card: Card}) {
  const [dynamicWidth, setDynamicWidth] = useState<number>(250);
  const {card} = props;
  const context = card.content;

  useEffect(() => {
    let lines: string[] = [];
    if (context !== null && context !== undefined) {
      lines = context.split('\n');
    }

    const maxLength =
      lines.length === 0 ? 10 : Math.max(...lines.map(line => line.length));

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
