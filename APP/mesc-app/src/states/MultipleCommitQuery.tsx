import {atom} from 'recoil';

export const MultipleCommitQuery = atom<String[]>({
  key: 'MultipleCommitQuery',
  default: [],
});
