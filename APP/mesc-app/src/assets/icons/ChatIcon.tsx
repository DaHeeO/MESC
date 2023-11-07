import Home from '../icons/homeIcon.svg';
import Report from '../icons/reportIcon.svg';
import DataControll from '../icons/dbIcon.svg';
import Filter from '../icons/filterIcon.svg';

interface IconsProps {
  iconId: number;
}

export const IconSwitch = ({iconId}: IconsProps) => {
  switch (iconId) {
    case 1:
      return <Home />;
    case 2:
      return <Report />;
    case 3:
      return <DataControll />;
    case 4:
      return <Filter />;
  }
};
