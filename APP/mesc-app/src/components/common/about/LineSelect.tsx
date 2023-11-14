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

export const LineSelect: React.FC<AboutSelectProps> = ({valuesList}) => {
  const [condition, setCondition] = useRecoilState(ConditionState);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<{label: string; value: string}[]>([]);

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
    }
  }, [valuesList]);

  // DropDownPicker에서 항목을 선택할 때 호출되는 콜백 함수
  const handleItemSelect = (itemValue: string | null) => {
    // 선택한 값을 Recoil 상태에 저장
    setCondition(prevCondition => ({
      ...prevCondition,
      line: itemValue ?? '', // 여기에 상태에 저장할 필드명을 넣어주세요
    }));

    // DropDownPicker에서 현재 선택한 값을 업데이트
    setValue(itemValue);
  };

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      maxHeight={300}
      onChangeItem={item => handleItemSelect(item.value)}
    />
  );
};
