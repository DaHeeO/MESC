import {atom} from 'recoil';

export const BlockResponseData = atom({
  key: 'blockResponseData',
  default: {
    blockId: 0,
    isPossible: false,
    cardList: [] as Card[],
    section: 0,
  },
});

type Card = {
  cardId: number;
  cardName?: string | null | undefined;
  content?: string | null;
  cardType: string;
  labels?: LabelItem[] | null | undefined;
  table?: TableData | null | undefined;
  button?: ButtonItem[];
};

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
  actionId: number;
};
