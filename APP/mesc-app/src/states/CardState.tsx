import {atom} from 'recoil';

export interface Card {
  cardId: number;
  cardName?: string | null | undefined;
  content?: string | null;
  cardType: string;
  labels?: LabelItem[] | null | undefined;
  table?: TableData | null | undefined;
  button?: ButtonItem[] | null | undefined;
}

type LabelItem = {
  name: string;
  labelType: string;
  query: string;
};

type TableData = {
  columnNameList: string[];
  columnTypeList: string[];
  rowList: string[][];
};

type ButtonItem = {
  id: number;
  name: string;
  linkType: string;
  link: string;
  iconId?: any | null;
  response: string;
};

export const cardState = atom<Card>({
  key: 'cardState', // 고유한 키
  default: {
    // 기본값 설정
    cardId: 0,
    content: null,
    cardType: '',
    // 다른 필드는 선택적이므로 초기값이 없어도 됩니다.
  },
});
