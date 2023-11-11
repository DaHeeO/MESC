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
        width="100%"
        height="50%"
        justify="space-between"
        align="center">
        <SectionContainer width="50%" height="100%">
          <GoStartChat />
        </SectionContainer>
        <SectionContainer width="50%" height="100%">
          <GoReport />
        </SectionContainer>
      </SectionContainer>
      <SectionContainer
        width="100%"
        height="50%"
        justify="space-between"
        align="center">
        <SectionContainer width="50%" height="100%">
          <GoDataControll />
        </SectionContainer>
      </SectionContainer>
    </SectionBody>
  );
};
