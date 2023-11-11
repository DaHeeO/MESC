import React, {useState, useEffect, useRef} from 'react';
// Styled
import {View, Dimensions, ScrollView} from 'react-native';
import * as S from './Teble.styles';
// Components
import {ConditionModify} from '../../common/id/ChatChooseId';
import {useRecoilState} from 'recoil';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {modalIdState} from '../../../states/ModalIdState';

type TableProps = {
  header: string[];
  typeHeader: string[];
  body: any[][]; // or string[][]
  // 다른 props들이 있다면 여기에 추가
  onPress: () => void;
};

const Table: React.FC<TableProps> = (props: TableProps) => {
  const [columnWidths, setColumnWidths] = useState<number[]>(
    new Array(props.header.length).fill(0),
  );

  const [openCoditionForm, setOpenCoditionForm] =
    useRecoilState(ConditionModifyState);
  const [modalId, setModalId] = useRecoilState(modalIdState);

  const horizontalScrollRef = useRef(null);

  const updateColumnWidths = (width: number, index: number) => {
    setColumnWidths(currentWidths => {
      const newWidths = [...currentWidths];
      newWidths[index] = Math.max(newWidths[index], width);
      return newWidths;
    });
  };

  // 각 열에 대해 onLayout 콜백을 생성하는 함수
  const onLayoutCallback = (index: number) => (event: any) => {
    const {width} = event.nativeEvent.layout;
    updateColumnWidths(width, index);
  };

  // // ScrollView의 너비를 화면 크기에 맞추기 위한 state
  // const [scrollViewWidth, setScrollViewWidth] = useState(0);

  useEffect(() => {
    const screen = Dimensions.get('window');
    // setScrollViewWidth(screen.width);
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.Container width="60%" height="100%"></S.Container>
        <S.Container
          width="40%"
          height="100%"
          justifyContent="center"
          alignItems="flex-end">
          {/* <ConditionModify
            onPress={
              setOpenCoditionForm(!openCoditionForm);
              console.log('조건변경: ', openCoditionForm);
            }
          /> */}
        </S.Container>
      </S.Header>
      <S.Body>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={{flexDirection: 'row'}}>
              {props.header.map((column, index) => (
                <S.ColumnInfoBox key={`header-${index}`}>
                  <S.ColumnName>{column}</S.ColumnName>
                </S.ColumnInfoBox>
              ))}
            </View>
            <View style={{flexDirection: 'row'}}>
              {props.typeHeader.map((type, index) => (
                <S.ColumnInfoBox key={`type-${index}`}>
                  <S.ColumnType>{type}</S.ColumnType>
                </S.ColumnInfoBox>
              ))}
            </View>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              {props.body.map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={{flexDirection: 'row'}}>
                  {row.map((cell, cellIndex) => (
                    <S.CellBox key={`cell-${rowIndex}-${cellIndex}`}>
                      <S.Cell>{cell}</S.Cell>
                    </S.CellBox>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </S.Body>
    </S.Container>
  );
};
export default Table;
