import {atom} from 'recoil';

export const groupInfo = atom({
  key: 'groupIdState',
  default: {
    groupId: 0,
    groupName: '',
  },
});
