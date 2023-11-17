import {atom} from 'recoil';

interface User {
  email: string;
  name: string;
  phoneNumber: string;
  role: string;
  userId: number;
  checkContact: boolean;
}

interface CheckContactProps {
  users: User[];
}

export const checkContactState = atom<CheckContactProps>({
  key: 'checkContactState',
  default: {
    users: [
      {
        email: '',
        name: '',
        phoneNumber: '',
        role: '',
        userId: 0,
        checkContact: false,
      },
    ],
  },
});
