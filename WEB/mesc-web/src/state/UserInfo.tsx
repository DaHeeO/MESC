import { atom } from "recoil";

export const userInfo = atom({
  key: "groupIdState",
  default: {
    userId: 0,
    name: "",
    email: "",
    phoneNumber: "",
    role: "",
  },
});
