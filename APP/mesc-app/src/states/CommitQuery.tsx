import {atom} from 'recoil';

export const CommitQuery = atom<String>({
  key: 'CommitQuery',
  default: '',
});
