import {atom} from 'recoil';

interface ConditionState {
  product: number;
  startDate: string;
  endDate: string;
  line: number;
  query: string | undefined;
  title: string | undefined;
}
export const ConditionState = atom<ConditionState>({
  key: 'conditionState',
  default: {
    product: 0,
    startDate: '',
    endDate: '',
    line: 0,
    query: '',
    title: '',
  },
});
