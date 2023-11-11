import {atom} from 'recoil';

export const LogSearchOption = atom({
  key: 'logSearchOption',
  default: {
    keyword: '',
    date: '',
    levelList: [],
  },
});
