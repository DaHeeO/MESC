import React from 'react';
import {FormContainer, TextBox} from './ConditionFormStyle';
import {DatePicker} from '../../common/about/AboutDate';

export const ConditionSelet = () => {
  return (
    <>
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
    </>
  );
};
