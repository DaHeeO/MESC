import React from 'react';
import {FormContainer, TextBox} from './ConditionFormStyle';
import {AboutSelect} from '../../common/about/AboutSelect';

export const ConditionSelet = () => {
  return (
    <>
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
      </FormContainer>
    </>
  );
};
