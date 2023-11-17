import { atom } from "recoil";

export const CardListState = atom<any[]>({
  key: "CardListState",
  default: [],
});
