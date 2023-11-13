import { atom } from "recoil";

export const BlockNameState = atom<String>({
  key: "BlockNameState",
  default: "",
});

interface CreateBlock {
  blockInfo: {
    name: string;
    isEditable: boolean;
  };
  cardReqList: {
    name: string;
    sequence: number;
    cardType: string;
    content: string;
    componentList: {
      type: string;
      sequence: string;
      object: {
        name: string;
        linkType: string;
        link: string;
      };
    }[];
  }[];
}

export const CreatBlockState = atom<CreateBlock>({
  key: "CreatBlockState",
  default: {
    blockInfo: {
      name: "",
      isEditable: false,
    },
    cardReqList: [
      {
        name: "",
        sequence: 0,
        cardType: "",
        content: "",
        componentList: [
          {
            type: "",
            sequence: "",
            object: {
              name: "",
              linkType: "",
              link: "",
            },
          },
        ],
      },
    ],
  },
});
