import { atom } from "recoil";

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  section: {
    id: number;
    name: string;
  };
}

export const FAQState = atom<FAQ | null>({
  key: "faqState",
  default: null,
});

export const FAQListState = atom<FAQ[]>({
  key: "faqListState",
  default: [],
});
