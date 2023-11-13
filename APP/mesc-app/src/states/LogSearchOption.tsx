import {atom} from 'recoil';

interface LogSearchOptionType {
  keyword: string;
  date: string;
  levelList: string[]; // 여기서 string[] 타입으로 명시
}

export const LogSearchOption = atom<LogSearchOptionType>({
  key: 'logSearchOption',
  default: {
    keyword: '',
    date: '',
    levelList: [],
  },
});
