import {atom} from 'recoil';

export const reportState = atom({
  key: 'reportState',
  default: {
    report: {
      title: '',
      content: '',
    },
  },
});
