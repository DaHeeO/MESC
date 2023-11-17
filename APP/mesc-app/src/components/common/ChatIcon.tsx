import Home from '../../assets/icons/homeIcon.svg';
import Report from '../../assets/icons/reportIcon.svg';
import DataControll from '../../assets/icons/dbIcon.svg';
import Filter from '../../assets/icons/filterIcon.svg';

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
