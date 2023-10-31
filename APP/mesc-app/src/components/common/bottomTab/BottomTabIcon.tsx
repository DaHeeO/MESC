import React from 'react';
import {useState, useEffect} from 'react';
import * as S from '../theme';

// icons
import MainIcon from '../../../assets/icons/home.svg';
import ContactIcon from '../../../assets/icons/contacts.svg';
import SettingIcon from '../../../assets/icons/setting.svg';
import MessageIcon from '../../../assets/icons/messages.svg';

interface NavIconProps {
  focused: boolean;
  darkMode: boolean;
  type: 'main' | 'contacts' | 'settings' | 'messages';
}

const getNavIconColor = (darkMode: boolean, focused: boolean) => {
  let iconColor;
  if (darkMode) {
    iconColor = focused ? S.colors.white : 'orange'; // 하양 주황
  } else {
    iconColor = focused ? S.colors.lightiris : S.colors.iris;
  }
  return iconColor;
};

const NavIcon = ({focused, darkMode, type}: NavIconProps) => {
  let IconComponent;

  const [color, setColor] = useState('#F78CA2');

  useEffect(() => {
    setColor(getNavIconColor(darkMode, focused));
  }, [darkMode, focused]);

  switch (type) {
    case 'main':
      IconComponent = MainIcon;
      break;
    case 'contacts':
      IconComponent = ContactIcon;
      break;
    case 'settings':
      IconComponent = SettingIcon;
      break;
    case 'messages':
      IconComponent = MessageIcon;
      break;
    default:
      throw new Error(`Unknown icon type: ${type}`);
  }

  return (
    <>
      <IconComponent color={color} width={25} height={25} />
    </>
  );
};

export default NavIcon;
