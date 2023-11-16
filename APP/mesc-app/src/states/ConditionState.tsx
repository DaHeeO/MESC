import {atom} from 'recoil';

interface ConditionState {
  product: string;
  startDate: string;
  endDate: string;
  line: string;
  query: string | undefined;
}
export const ConditionState = atom<ConditionState>({
  key: 'conditionState',
  default: {
    product: '',
    startDate: '',
    endDate: '',
    line: '',
    query: '',
  },
});
