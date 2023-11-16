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
  // Index?: number;
  id?: number;
  name: string;
  sequence: number;
  cardType: string;
  content: string;
  actionId?: number;
  componentList: ComponentItem[];
}

export const CardState = atom<any[]>({
  key: "CardState",
  default: [],
});

// component state
export interface Value {
  value?: string;
}

interface Object {
  name?: string;
  columnName?: string;
  tableName?: string;
  type?: string;
  valuesList?: Value[];
  linkType?: string;
  link?: number;
  actionId?: number;
}

export interface ComponentItem {
  type?: string;
  sequence?: string;
  object?: Object;
}

interface Component {
  componentList: ComponentItem[];
}

export const ComponentState = atom<Component>({
  key: "ComponentState",
  default: {
    componentList: [],
  },
});

// =======================================================
// black card 생성을 위한 recoilState
//========================================================
// 블럭 > 카드생성(TX, TA)
export interface TxTaStateProps {
  name: string;
  sequence: number;
  cardType: string;
  content: string;
}

export const TxTaState = atom<TxTaStateProps>({
  key: "TxTaState",
  default: {
    name: "",
    sequence: 0,
    cardType: "",
    content: "",
  },
});

//========================================================
// 블럭 > 카드생성(CH1,)
export interface Ch1StateProps {
  name: string;
  sequence: number;
  cardType: string;
  content: string;
  componentList: {
    type: string;
    sequence: string;
    object: {
      actionId: 0;
      name: string;
      linkType: string;
      link: string;
    };
  }[];
}

export const Ch1State = atom<Ch1StateProps>({
  key: "Ch1State",
  default: {
    name: "",
    sequence: 0,
    cardType: "",
    content: "",
    componentList: [
      {
        type: "",
        sequence: "",
        object: {
          actionId: 0,
          name: "",
          linkType: "",
          link: "",
        },
      },
    ],
  },
});
// 블럭 > 카드생성( CH2)
export interface Ch2StateProps {
  name: string;
  sequence: number;
  cardType: string;
  content: string;
  componentList: {
    type: string;
    sequence: string;
    object: {
      actionId: 0;
      name: string;
      linkType: string;
      link: string;
    };
  }[];
}

export const Ch2State = atom<Ch2StateProps>({
  key: "Ch2State",
  default: {
    name: "",
    sequence: 0,
    cardType: "",
    content: "",
    componentList: [
      {
        type: "",
        sequence: "",
        object: {
          actionId: 0,
          name: "",
          linkType: "",
          link: "",
        },
      },
      {
        type: "",
        sequence: "",
        object: {
          actionId: 0,
          name: "",
          linkType: "",
          link: "",
        },
      },
    ],
  },
});
