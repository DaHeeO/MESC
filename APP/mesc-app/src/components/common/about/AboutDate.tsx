import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {format} from 'date-fns';
import ko from 'date-fns/esm/locale/ko/index.js';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ConditionState} from '../../../states/ConditionState';

export const DatePicker = (props: {date: string}) => {
  const styles = StyleSheet.create({
    center: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: -1,
      flexDirection: 'row',
    },
    separator: {
      width: 3,
    },
  });
  // useState Hook를 사용하여 날짜와 모달 유형, 노출 여부를 설정할 변수를 생성
  const [condition, setCondition] = useRecoilState(ConditionState);
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [mode, setMode] = useState('date'); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부

  const onPressDate = () => {
    // 날짜 클릭 시
    setMode('date'); // 모달 유형을 date로 변경
    setVisible(true); // 모달 open
  };

  const onPressTime = () => {
    // 시간 클릭 시
    setMode('time'); // 모달 유형을 time으로 변경
    setVisible(true); // 모달 open
  };

  const onConfirm = (selectedDate: any) => {
    // 날짜 또는 시간 선택 시
    setVisible(false); // 모달 close
    onChangeDate(selectedDate); // 선택한 날짜 변경
    // console.log(selectedDate);
    const value = format(new Date(selectedDate), 'yyyyMMdd', {locale: ko});
    if (props.date === 'start') {
      setCondition(prevCondition => ({...prevCondition, startDate: value}));
    } else if (props.date === 'end') {
      setCondition(prevCondition => ({...prevCondition, endDate: value}));
    }
    // console.log(condition);
  };

  useEffect(() => {
    const value = format(new Date(), 'yyyyMMdd', {locale: ko});
    if (props.date === 'start') {
      setCondition(prevCondition => ({...prevCondition, startDate: value}));
    } else if (props.date === 'end') {
      setCondition(prevCondition => ({...prevCondition, endDate: value}));
    }
  }, []);

  const onCancel = () => {
    // 취소 시
    setVisible(false); // 모달 close
  };

  return (
    <>
      <View style={styles.center}>
        <Pressable
          onPress={onPressDate}
          style={{
            height: '60%',
            width: '95%',
            borderRadius: 10,
            justifyContent: 'center',
            borderColor: 'black',
            borderWidth: 1,
          }}>
          {/* 날짜 선택 영역 */}
          <Text style={{marginLeft: '5%', color: 'black'}}>
            {format(new Date(date), 'PPP', {locale: ko})}{' '}
          </Text>
        </Pressable>
        <View style={styles.separator} />
      </View>

      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={date}
      />
    </>
  );
};
