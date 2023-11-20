import { atom } from 'recoil';

export const AddDataListSavePoint = atom<number>({
    key: 'AddDataListSavePoint',
    default: 0,
});
