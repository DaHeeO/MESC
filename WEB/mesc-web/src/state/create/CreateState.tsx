// 이 파일 recoil이 깔끔함

import { atom } from "recoil";

// block state

export interface Block {
  name: string;
  id?: number;
}

export const BlockState = atom<Record<string, Block>>({
  key: "BlockState",
  default: {},
});

// cart state
export interface Card {
  // id?: number;
  name: string;
  sequence: number;
  cardType: string;
  content: string;
  compnentList?: ComponentListItem[];
}

export const CardState = atom<Card[]>({
  key: "CardState",
  default: [],
});

// component state
interface Value {
  value: string;
}

interface Object {
  name: string;
  columnName?: string;
  tableName?: string;
  type?: string;
  valuesList?: Value[];
  linkType: string;
  link: number;
}

interface ComponentListItem {
  type: string;
  sequence: string;
  object: Object;
}

interface Component {
  componentList: ComponentListItem[];
}

export const ComponentState = atom<Component>({
  key: "ComponentState",
  default: {
    componentList: [],
  },
});
