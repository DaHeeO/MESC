import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {ConditionState} from '../../../states/ConditionState';
import {FormContainer, TextBox, TextBtn} from './ConditionFormStyle';
import {AboutSelect} from '../../common/about/AboutSelect';
import {OkayBtn} from './ConditionBtn';
import {DatePicker} from '../../common/about/AboutDate';
export const ConditionForm = () => {
  // Recoil에서 조건 꺼내오기
  const [condition, setCondition] = useRecoilState(ConditionState);
  const [open, setOpen] = useState(false);

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
          <TextBtn
            onPress={resetCondition}
            // style={{backgroundColor: 'pink'}}
          >
            <TextBox>조건초기화</TextBox>
          </TextBtn>
        </FormContainer>
        {/* 적용버튼 */}
        <FormContainer
          width="50%"
          height="100%"
          // style={{backgroundColor: 'blue'}}
        >
          <OkayBtn />
        </FormContainer>
      </FormContainer>

      {/* 조건 Container */}
      <FormContainer height="90%" direction="column">
        {/* 조건 1 */}
        <FormContainer
          height="20%"
          width="100%"
          direction="column"
          style={{
            // backgroundColor: 'gold',
            zIndex: 3000,
          }}>
          <FormContainer
            height="30%"
            width="100%"
            // style={{backgroundColor: 'pink'}}
          >
            <TextBox>조건 1</TextBox>
          </FormContainer>

          <FormContainer
            height="70%"
            width="90%"
            align="flex-start"
            // style={{backgroundColor: 'skyblue'}}
          >
            <AboutSelect />
          </FormContainer>
        </FormContainer>
        {/* 날짜조건 */}
        <FormContainer
          height="40%"
          width="100%"
          direction="column"
          style={{
            // backgroundColor: 'gold',
            zIndex: 2900,
          }}>
          <FormContainer
            height="20%"
            width="100%"
            // style={{backgroundColor: 'pink'}}
          >
            <TextBox>기간설정</TextBox>
          </FormContainer>

          <FormContainer
            height="80%"
            width="95%"
            align="flex-start"
            direction="column"
            // style={{backgroundColor: 'skyblue'}}
          >
            <FormContainer
              width="100%"
              height="50%"
              // style={{backgroundColor: 'pink'}}
            >
              <DatePicker />
            </FormContainer>
            <FormContainer
              width="100%"
              height="50%"
              // style={{backgroundColor: 'pink'}}
            >
              <DatePicker />
            </FormContainer>
          </FormContainer>
        </FormContainer>
        {/* 조건3 */}

        <FormContainer
          height="30%"
          width="100%"
          direction="column"
          style={{
            // backgroundColor: 'gold',
            zIndex: 3000,
          }}>
          <FormContainer
            height="30%"
            width="100%"
            // style={{backgroundColor: 'pink'}}
          >
            <TextBox>조건 3</TextBox>
          </FormContainer>

          <FormContainer
            height="70%"
            width="90%"
            align="flex-start"
            // style={{backgroundColor: 'skyblue'}}
          >
            <AboutSelect />
          </FormContainer>
        </FormContainer>
      </FormContainer>
    </FormContainer>
  );
};
