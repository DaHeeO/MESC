import {atom} from 'recoil';

export const BottomSheetState = atom<boolean>({
  key: 'BottomSheetState',
  default: false,
});
