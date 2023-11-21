import { atom } from 'recoil';

interface DataListBodyProps {
    type: string;
    sequence: string;
    object: {
        name: string;
        linkType: string;
        link: string;
        actionId: number;
    };
}

export const DataListBody = atom<DataListBodyProps>({
    key: 'DataListBody',
    default: {
        type: 'BU',
        sequence: '1',
        object: {
            name: '',
            linkType: 'B',
            link: '4',
            actionId: 0,
        },
    },
});
