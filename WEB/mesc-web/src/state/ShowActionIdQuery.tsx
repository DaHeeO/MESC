import { atom } from 'recoil';

export const ShowActionIdQuery = atom<boolean>({
    key: 'ShowActionIdQuery',
    default: false,
});
