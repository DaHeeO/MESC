import React from 'react';
import {useRecoilState} from 'recoil';
import {ConditionState} from '../../../states/ConditionState';
import {Text} from 'react-native';
import {FormContainer, TextBtn} from './ConditionFormStyle';
import ConditionBtn from './ConditionBtn';
import {AboutSelect} from '../../common/about/AboutSelect';

export const ConditionForm = () => {
  // Recoil에서 조건 꺼내오기
  const [condition, setCondition] = useRecoilState(ConditionState);

  // 조건 초기화 버튼
  const resetCondition = () => {
    setCondition({
      condition: {
        condition1: '',
        condition2: '',
        condition3: '',
      },
    });
  };

  return (
    <FormContainer direction="column">
      {/* 조건초기화, 적용 버튼 Container */}
      <FormContainer height="10%">
        {/* 조건초기화 */}
        <FormContainer width="50%" height="100%">
          <TextBtn onPress={resetCondition}>
            <Text>조건초기화</Text>
          </TextBtn>
        </FormContainer>
        {/* 적용버튼 */}
        <FormContainer width="50%" height="100%">
          <ConditionBtn />
        </FormContainer>
      </FormContainer>
      <FormContainer height="90%" direction="column">
        {/* 조건 1 */}
        <FormContainer height="30%" width="100%">
          <AboutSelect />
        </FormContainer>
        {/* 날짜조건 */}
        <FormContainer height="40%" width="100%"></FormContainer>
        {/* 조건3 */}
        <FormContainer height="30%" width="100%"></FormContainer>
      </FormContainer>
    </FormContainer>
  );
};
