import React, {useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useRecoilState} from 'recoil';
import {ConditionState} from '../../../states/ConditionState';

interface AboutSelectProps {
  valuesList: Value[];
}

interface Value {
  id: number;
  value: string;
  linkId: number;
  comId: number;
}

export const LineSelect: React.FC<AboutSelectProps> = ({valuesList}) => {
  const [condition, setCondition] = useRecoilState(ConditionState);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<{label: string; value: string}[]>([]);
  const [defaultValue, setDefaultValue] = useState<string | null>(null);

  useEffect(() => {
    // valuesList가 존재하고 배열인 경우에만 변환
    if (valuesList && Array.isArray(valuesList)) {
      // valuesList를 items 형식으로 변환
      const formattedItems: {label: string; value: string; comId: number}[] =
        valuesList.map(item => ({
          label: item.value,
          value: item.id.toString(),
          comId: item.comId,
        }));
      setItems(formattedItems);

      if (formattedItems.length > 0) {
        setDefaultValue(formattedItems[0].comId.toString());
        setValue(formattedItems[0].comId.toString());
        setCondition(prevCondition => ({
          ...prevCondition,
          line: formattedItems[0].comId.toString(),
        }));
        console.log('line', formattedItems[0].comId);
      }
    }
  }, [valuesList]);

  useEffect(() => {
    if (value) {
      const selectedLabel =
        items.find(item => {
          return item.value === value;
        })?.label || '';
      setCondition(prevCondition => ({
        ...prevCondition,
        line: selectedLabel,
      }));
    }
  }, [value, items]);

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
