import {atom} from 'recoil';

export const ModalDataState = atom({
  key: 'modalDataState',
  default: {
    title: '',
    table: {
      columnNameList: [],
      columnTypeList: [],
      rowList: [],
    },
    query: '',
    onPress: undefined, // 옵셔널 함수이므로 undefined를 할당하거나 생략할 수 있습니다.
  },
});
