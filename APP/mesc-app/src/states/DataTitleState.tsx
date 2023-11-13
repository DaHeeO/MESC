import {atom} from 'recoil';

export const SingleTableTitleState = atom<string>({
  key: 'SingleTableTitleState',
  default: '',
});
