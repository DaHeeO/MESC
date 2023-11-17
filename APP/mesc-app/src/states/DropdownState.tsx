import {atom} from 'recoil';

export const DropdownState = atom({
  key: 'DropdownState',
  default: [] as dropdown[],
});

type dropdown = {
  id: number;
  name: string;
  columnName: string;
  tableName: string;
  type: string;
  valuesList: Value[];
};

type Value = {
  id: number;
  value: string;
  linkId: number;
  comId: number;
};
