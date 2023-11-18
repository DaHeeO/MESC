import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import * as S from './FAQ.styles';
import * as C from '../../components/common/Theme';

import Left from '../../assets/icons/left.svg';
import FAQItem from '../../components/settingComponent/FAQItem';

interface SettingsProps {
  navigation: any;
}

const FAQData = [
  {
    category: 1, //로그인
    questions: [
      {
        question: '아이디는 어떻게 찾나요?',
        answer: '아이디는 Id 찾기를 통해 찾을 수 있습니다.',
      },
      {
        question: '비밀번호는 어떻게 바꾸죠?',
        answer: '비번은 Knox 계정에서 바꾸면 연동이 되어서 반영이 됩니다.',
      },
    ],
  },
  {
    category: 2, //챗봇
    questions: [
      {
        question: '챗봇은 어떻게 쓰면 되나요?',
        answer: '챗봇은 쿼리 조회, 수정, 삭제 기능을 사용하시면 됩니다.',
      },
      {
        question: '챗봇쿼리는 어떻게 보내나요?',
        answer:
          '챗봇쿼리 조회를 누르고 입력창 안에 쿼리를 쓰시면 해당 쿼리에 오류가 없을 시 자동 커밋이 됩니다.',
      },
    ],
  },
  {
    category: 3, //연락처
    questions: [
      {
        question: '연락처 추가는 어떻게 하나요',
        answer:
          '여기는 녹스에 등록된 연락처를 연동하기 때문에 사용자가 직접 추가는 어렵습니다.',
      },
      {
        question: '그룹은 어떻게 만드나요?',
        answer:
          '그룹은 연락처에서 그룹 만들기를 누르면 생성이 되고 거기에 사용자가 직접 연락처를 추가하시면 됩니다.',
      },
    ],
  },
];
function FAQ({navigation}: SettingsProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  const getFilteredFAQs = () => {
    if (selectedCategory === 0) {
      return FAQData.flatMap(item => item.questions);
    } else {
      const selectedCategoryData = FAQData.find(
        item => item.category === selectedCategory,
      );
      return selectedCategoryData ? selectedCategoryData.questions : [];
    }
  };
  return (
    <S.Container>
      <S.Div>
        <S.Top>
          <S.Navigation>
            <S.Back onPress={() => navigation.navigate('Settings')}>
              <Left />
            </S.Back>
            <S.TitleBox>
              <S.Title>FAQ</S.Title>
            </S.TitleBox>
          </S.Navigation>
          <S.Menu>
            <S.SelectBox
              onPress={() => handleCategoryClick(0)}
              selected={selectedCategory === 0}>
              <S.BoldText size={14} color={C.colors.primary}>
                전체보기
              </S.BoldText>
            </S.SelectBox>
            <S.SelectBox
              onPress={() => handleCategoryClick(1)}
              selected={selectedCategory === 1}>
              <S.BoldText size={14} color={C.colors.primary}>
                로그인
              </S.BoldText>
            </S.SelectBox>
            <S.SelectBox
              onPress={() => handleCategoryClick(2)}
              selected={selectedCategory === 2}>
              <S.BoldText size={14} color={C.colors.primary}>
                챗봇
              </S.BoldText>
            </S.SelectBox>
            <S.SelectBox
              onPress={() => handleCategoryClick(3)}
              selected={selectedCategory === 3}>
              <S.BoldText size={14} color={C.colors.primary}>
                연락처
              </S.BoldText>
            </S.SelectBox>
          </S.Menu>
        </S.Top>
        <S.Body>
          <ScrollView
            contentContainerStyle={{
              display: 'flex',
              width: '100%',
            }}>
            {getFilteredFAQs().map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </ScrollView>
        </S.Body>
      </S.Div>
    </S.Container>
  );
}

export default FAQ;
