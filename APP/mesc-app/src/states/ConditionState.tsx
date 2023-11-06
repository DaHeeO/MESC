import {atom} from 'recoil';

export const ConditionState = atom({
  key: 'conditionState',
  default: {
    condition: {
      condition1: '',
      condition2: '',
      condition3: '',
    },
  },
});