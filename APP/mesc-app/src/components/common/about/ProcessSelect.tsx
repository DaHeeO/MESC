import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ConditionState} from '../../../states/ConditionState';

interface AboutSelectProps {
  valuesList: value[];
}

interface value {
  id: number;
  value: string;
  linkId: number;
}

export const ProcessSelect: React.FC<AboutSelectProps> = ({valuesList}) => {
  const [condition, setCondition] = useRecoilState(ConditionState);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<{label: string; value: string}[]>([]);
  const [defaultValue, setDefaultValue] = useState<string | null>(null);

  useEffect(() => {
    // valuesList가 존재하고 배열인 경우에만 변환
    if (valuesList && Array.isArray(valuesList)) {
      // valuesList를 items 형식으로 변환
      const formattedItems: {label: string; value: string}[] = valuesList.map(
        item => ({
          label: item.value,
          value: item.id.toString(),
        }),
      );
      setItems(formattedItems);

      if (formattedItems.length > 0) {
        setDefaultValue(formattedItems[0].value);
        setValue(formattedItems[0].value);
        setCondition(prevCondition => ({
          ...prevCondition,
          process: formattedItems[0].value,
        }));
      }
    }
  }, [valuesList]);

  useEffect(() => {
    if (value) {
      setCondition(prevCondition => ({...prevCondition, process: value}));
    }
  }, [value]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      maxHeight={300}
      // onChangeItem={handleItemSelect}
    />
  );
};
