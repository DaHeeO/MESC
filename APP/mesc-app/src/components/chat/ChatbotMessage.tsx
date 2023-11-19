import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import * as S from './ChatbotMessage.styles';
// import {cardState} from '../../states/CardState';
import {useRecoilValue} from 'recoil';
import {Card} from '../../states/CardState';

function ChatbotMessage(props: {card: Card}) {
  const [dynamicWidth, setDynamicWidth] = useState<number>(250);
  const {card} = props;
  const context = card.content;
  const [textStyle, setTextStyle] = useState({});

  useEffect(() => {
    let lines: string[] = [];
    if (context !== null && context !== undefined) {
      lines = context.split('\n');
    }

    if (
      context !== null &&
      context !== undefined &&
      context.includes('SQLSyntaxErrorException')
    ) {
      setTextStyle({color: 'red'});
    } else {
      setTextStyle({color: '#323639'}); // 기본 색상
    }

    const maxLength =
      lines.length === 0 ? 10 : Math.max(...lines.map(line => line.length));

    if (maxLength * 10 < 230) {
      setDynamicWidth(maxLength * 12);
    } else {
      setDynamicWidth(230);
    }
  }, [context]);

  return (
    <View>
      <S.MescContainer style={{width: dynamicWidth + 30}}>
        <View
          style={{
            // backgroundColor: 'blue',
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              color: '#323639',
              fontWeight: 'bold',
            }}>
            {context}
          </Text>
        </View>
      </S.MescContainer>
    </View>
  );
}

export default ChatbotMessage;
