import {atom} from 'recoil';

export const modalIdState = atom<string>({
  key: 'modalIdState',
  default: '',
});
