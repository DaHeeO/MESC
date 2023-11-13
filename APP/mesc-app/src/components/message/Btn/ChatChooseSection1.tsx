import React from 'react';
import {SectionBody, SectionContainer} from './SectionStyle';
import {
  GoDataControll,
  GoReport,
  GoStartChat,
} from '../../common/id/ChatChooseId';
export const ChatChooseSection1 = () => {
  return (
    <SectionBody>
      <SectionContainer
        backgroundColor="yellow"
        height="30px"
        // marginBottom="10px"
        // width="220px"
        // height="50%"
        // justify="space-between"
        align="center">
        <SectionContainer width="110px" height="30px" backgroundColor="blue">
          <GoStartChat />
        </SectionContainer>
        <SectionContainer width="110px" height="30px" backgroundColor="red">
          <GoReport />
        </SectionContainer>
      </SectionContainer>
      <SectionContainer
        width="110px"
        height="30px"
        backgroundColor="green"
        // width="200px"
        // height="50%"
        // justify="space-between"
        // align="center"
      >
        <SectionContainer width="110px" height="30px">
          <GoDataControll />
        </SectionContainer>
      </SectionContainer>
    </SectionBody>
  );
};
