import { atom } from 'recoil';

export const ActionIdQuery = atom<string>({
    key: 'ActionIdQuery',
    default: '',
});
