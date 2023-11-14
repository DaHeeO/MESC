import {atom} from 'recoil';

export const ConditionState = atom({
  key: 'conditionState',
  default: {
    process: '',
    startDate: '',
    endDate: '',
    line: '',
  },
});
