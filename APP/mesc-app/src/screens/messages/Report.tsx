import React from 'react';
import BottomSheetComponent from '../../components/common/bottomSheet/bottomSheet';
import {ReportForm} from '../../components/message/reportForm';

export const Report = () => {
  return (
    <>
      <BottomSheetComponent
        width="17%"
        btnTitle="보고하기"
        sheetTitle="보고"
        component={<ReportForm />}
      />
    </>
  );
};

export default Report;
