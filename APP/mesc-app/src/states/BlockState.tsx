import {atom} from 'recoil';

export const ChatbotHistoryState = atom({
  key: 'ChatbotHistoryState',
  default: [{}],
});
