import { atom } from "recoil";
// Block State



// Card State
interface card {
  sequence: number;
  name: string;
  type: string;
}

export const CardState = atom<card>({
  key: "CardState",
  default: {
    sequence: 0,
    name: "",
    type: "",
  },
});
// 카드 추가를 위한 atom=========================================
interface Card {
  id: number;
  content: string;
  type: string;
}

interface CardState {
  [key: string]: Card[];
}

export const CreatCardState = atom<CardState>({
  key: "CreatCardState",
  default: {},
});

// ==============================================================
