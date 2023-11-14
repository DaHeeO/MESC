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
  valuesList: value[];
};

type value = {
  id: number;
  value: string;
  linkId: number;
};
