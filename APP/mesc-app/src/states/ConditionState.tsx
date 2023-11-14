import {atom} from 'recoil';

interface ConditionState {
  process: string;
  startDate: string;
  endDate: string;
  line: string;
  query: string | undefined;
}
export const ConditionState = atom<ConditionState>({
  key: 'conditionState',
  default: {
    process: '',
    startDate: '',
    endDate: '',
    line: '',
    query: '',
  },
});
