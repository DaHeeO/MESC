import {atom} from 'recoil';

export const BottomSheetState = atom<boolean>({
  key: 'BottomSheetState',
  default: false,
});

export const ConditionModifyState = atom<boolean>({
  key: 'ConditionModifyState',
  default: false,
});

export const ContactModalState = atom<boolean>({
  key: 'ContactModalState',
  default: false,
});
