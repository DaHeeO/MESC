import { atom } from "recoil";

export interface Block {
  name: string;
  id?: number;
}

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

export interface ComponentItem {
  id?: number;
  type: string;
  sequence: number;
  object: Object;
}

export interface Object {
  id?: number;
  name: string;
  linkType: string;
  link: number;
  actionId?: number;
  iconId?: number;
  response: string;
}

export const BlockListState = atom<Block[]>({
  key: "BlockListState",
  default: [],
});

export const BlockState = atom<Block>({
  key: "BlockState",
  default: {
    name: "",
    id: 0,
  },
});

export const CardListState = atom<Card[]>({
  key: "CardListState",
  default: [],
});

export const CardState = atom<Card>({
  key: "CardState",
  default: {
    id: 0,
    name: "",
    sequence: 0,
    cardType: "",
    content: "",
    componentList: [],
  },
});

export const ComponentListState = atom<ComponentItem[]>({
  key: "ComponentListState",
  default: [],
});

export const ComponentState = atom<ComponentItem>({
  key: "ComponentState",
  default: {
    type: "BU",
    sequence: 0,
    object: {
      name: "",
      linkType: "",
      link: 0,
      response: "",
    },
  },
});

export const ModalCardListState = atom<Card[]>({
  key: "CardListState",
  default: [],
});
