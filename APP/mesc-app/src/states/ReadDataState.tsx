import {atom} from 'recoil';

export const ActionIdState = atom<number>({
  key: 'ActionIdState',
  default: 0,
});
