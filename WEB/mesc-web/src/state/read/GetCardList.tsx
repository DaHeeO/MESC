import { atom } from "recoil";

interface CardListProps {
  result: string;
}

export const CardListState = atom<CardListProps>({
  key: "CardListState",
  default: {
    result: "",
  },
});
