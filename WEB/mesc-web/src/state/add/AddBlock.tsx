import { atom } from "recoil";

export const BlockNameState = atom<String>({
  key: "BlockNameState",
  default: "",
});
