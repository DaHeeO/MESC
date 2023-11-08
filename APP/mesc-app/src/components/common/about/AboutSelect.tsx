import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export const AboutSelect = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  // select에 들어갈 값들
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  // console.log(open);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      maxHeight={300}
    />
  );
};
