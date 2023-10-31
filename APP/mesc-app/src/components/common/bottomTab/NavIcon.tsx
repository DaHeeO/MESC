import React from 'react';
import {useState, useEffect} from 'react';

// icons
import Home from '../../../assets/icons/home.svg';
import Contact from '../../../assets/icons/contacts.svg';
import Message from '../../../assets/icons/messages.svg';
import Setting from '../../../assets/icons/setting.svg';

// styles
import * as varStyles from '../theme';

interface NavIconProps {
  focused: boolean;
  type: 'Main' | 'Contact' | 'Message' | 'Setting';
}

const getNavIconColor = (focused: boolean) => {
  let iconColor;
  iconColor = focused ? varStyles.colors.primary : varStyles.colors.tertiary;
  return iconColor;
};

const NavIcon = ({focused, type}: NavIconProps) => {
  let IconComponent;

  const [color, setColor] = useState(varStyles.colors.primary);

  useEffect(() => {
    setColor(getNavIconColor(focused));
  }, [focused]);

  switch (type) {
    case 'Main':
      IconComponent = Home;
      break;
    case 'Contact':
      IconComponent = Contact;
      break;
    case 'Message':
      IconComponent = Message;
      break;
    case 'Setting':
      IconComponent = Setting;
      break;
    default:
      throw new Error(`Unknown icon type: ${type}`);
  }

  return (
    <>
      <IconComponent color={color} width={24} height={24} />
    </>
  );
};

export default NavIcon;
