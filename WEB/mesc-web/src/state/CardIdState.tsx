// select박스에서 선택된 recoil값 저장하기
import { atom } from "recoil";

export const CardIdState = atom<string>({
  key: "CardIdState",
  default: "",
});
