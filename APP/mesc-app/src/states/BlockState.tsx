import {atom} from 'recoil';
import {ReactNode} from 'react';

export const ChatbotHistoryState = atom<ReactNode[]>({
  key: 'ChatbotHistoryState',
  default: [],
});
