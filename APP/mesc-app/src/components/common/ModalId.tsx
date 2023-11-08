import React from 'react';
import LogLevelForm from '../chat/log/LogLevelForm';
import {ConditionForm} from '../message/Condition/ConditionForm';
import {ReportForm} from '../message/Report/ReportForm';
import {ContactListForm} from '../contact/ContactList';

interface ModalIdSwitchProps {
  modalId: string;
}

export const ModalIdSwitch = ({modalId}: ModalIdSwitchProps) => {
  switch (modalId) {
    case 'LF':
      return <LogLevelForm />;
    case 'CF':
      return <ConditionForm />;
    case 'RF':
      return <ReportForm />;
    case 'CLF':
      return <ContactListForm />;
    default:
      return <></>;
  }
};
