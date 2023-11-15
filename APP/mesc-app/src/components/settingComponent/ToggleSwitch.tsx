import React, {useState} from 'react';
import * as S from './ToggleSwitch.styles';
import CheckBox from '../../assets/icons/checkbox.svg';

function ToggleSwitch() {
  const [isChecked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!isChecked);
  };
  return (
    <S.ToggleSwitch onPress={handleToggle} isChecked={isChecked}>
      <S.Circle></S.Circle>
    </S.ToggleSwitch>
  );
}

export default ToggleSwitch;
