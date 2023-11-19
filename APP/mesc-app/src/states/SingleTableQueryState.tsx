import {atom} from 'recoil';

export const SingleTableQueryState = atom<String>({
  key: 'SingleTableQueryState',
  default: '',
});
