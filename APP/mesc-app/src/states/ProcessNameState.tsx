import {atom} from 'recoil';

export const ProcessNameState = atom<string[]>({
  key: 'ProcessNameState',
  default: [],
});
