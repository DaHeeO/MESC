import { atom } from "recoil";

interface CardListProps {
  result: {};
}

export const CardListState = atom<CardListProps>({
  key: "CardListState",
  default: {
    result: {},
  },
});
