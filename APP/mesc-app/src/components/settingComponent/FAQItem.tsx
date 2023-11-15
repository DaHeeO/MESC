// FAQItem.tsx

import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as S from './FAQItem.styles'; // 스타일 파일 경로에 맞게 수정
import * as C from '../../components/common/Theme';
import Left from '../../assets/icons/left.svg';

interface FAQItemProps {
  faq: {question: string; answer: string};
}

const FAQItem: React.FC<FAQItemProps> = ({faq}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <S.FAQBox onPress={toggleExpansion}>
      <S.FAQTitleBox>
        <S.BoldText size={14} color={C.colors.primary}>
          {faq.question}
        </S.BoldText>
        <View style={{transform: [{rotate: isExpanded ? '90deg' : '270deg'}]}}>
          <Left />
        </View>
      </S.FAQTitleBox>
      {isExpanded && (
        <S.FAQAnswerBox>
          <S.Container>
            <S.Text size={14} color={C.colors.primary}>
              {faq.answer}
            </S.Text>
          </S.Container>
        </S.FAQAnswerBox>
      )}
    </S.FAQBox>
  );
};

export default FAQItem;
