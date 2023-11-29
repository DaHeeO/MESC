import {atom} from 'recoil';

export const LoadingState = atom<boolean>({
  key: 'LoadingState',
  default: false,
});
