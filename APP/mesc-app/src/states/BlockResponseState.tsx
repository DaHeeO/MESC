import {atom} from 'recoil';

export const BlockResponseData = atom({
  key: 'blockResponseData',
  default: {
    blockId: 0,
    isPossible: false,
    cardList: [],
  },
});
