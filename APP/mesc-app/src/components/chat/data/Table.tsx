import React, {useState, useEffect} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import * as S from './Teble.styles';

type TableProps = {
  header: string[];
  typeHeader: string[];
  body: any[][]; // or string[][]
  // 다른 props들이 있다면 여기에 추가
};

const Table: React.FC<TableProps> = ({header, typeHeader, body}) => {
  const [columnWidths, setColumnWidths] = useState<number[]>(
    new Array(header.length).fill(0),
  );

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
        <S.Title></S.Title>
        <S.Button></S.Button>
      </S.Header>
      <S.Body>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // style={{width: scrollViewWidth, backgroundColor: 'red'}}
        >
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {header.map((column, index) => (
                <S.ColumnName
                  onLayout={onLayoutCallback(index)}
                  key={`header-${index}`}
                  style={{
                    minWidth: columnWidths[index],
                  }}>
                  {column}
                </S.ColumnName>
              ))}
            </View>
            <View style={{flexDirection: 'row'}}>
              {typeHeader.map((type, index) => (
                <S.ColumnType
                  onLayout={onLayoutCallback(index)}
                  key={`type-${index}`}
                  style={{minWidth: columnWidths[index]}}>
                  {type}
                </S.ColumnType>
              ))}
            </View>
            {body.map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={{flexDirection: 'row'}}>
                {row.map((cell, cellIndex) => (
                  <S.Cell
                    onLayout={onLayoutCallback(cellIndex)}
                    key={`cell-${rowIndex}-${cellIndex}`}
                    style={{minWidth: columnWidths[cellIndex]}}>
                    {cell}
                  </S.Cell>
                ))}
              </View>
            ))}
          </ScrollView>
        </ScrollView>
      </S.Body>
    </S.Container>
  );
};
export default Table;
