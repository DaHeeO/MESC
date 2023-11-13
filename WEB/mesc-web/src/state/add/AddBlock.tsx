import { atom } from "recoil";

export const BlockNameState = atom<String>({
  key: "BlockNameState",
  default: "",
});

interface BlockInfo {
  name: string;
  isEditable: boolean;
}

interface ComponentObject {
  name: string;
  linkType: string;
  link: string;
}

interface ComponentListItem {
  type: string;
  sequence: string;
  object: ComponentObject;
}

interface CardReqListItem {
  name: string;
  sequence: number;
  cardType: string;
  content: string;
  componentList: ComponentListItem[];
}

interface CreateTX {
  blockInfo: BlockInfo;
  cardReqList: CardReqListItem[];
}

export const CreateTXState = atom<CreateTX>({
  key: "CreateTXState",
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
// =================================================================
//  블럭만 생성
export const CreatBlockState = atom<CreateTX>({
  key: "CreatBlockState",
  default: {
    blockInfo: {
      name: "",
      isEditable: false,
    },
    cardReqList: [],
  },
});
// =================================================================
