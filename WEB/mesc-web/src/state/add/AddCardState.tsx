import { atom } from "recoil";

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
