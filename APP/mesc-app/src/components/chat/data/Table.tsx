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
  const [columnWidths, setColumnWidths] = useState<number[]>([]);

  return (
    <S.Container>
      <S.Header>
        <S.Title></S.Title>
        <S.Button></S.Button>
      </S.Header>
      <S.Body>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={true}>
            <View style={{flexDirection: 'row'}}>
              {header.map((column, index) => (
                <S.ColumnName key={`header-${index}`}>{column}</S.ColumnName>
              ))}
            </View>
            <View style={{flexDirection: 'row'}}>
              {typeHeader.map((type, index) => (
                <S.ColumnType key={`type-${index}`}>{type}</S.ColumnType>
              ))}
            </View>
            {body.map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={{flexDirection: 'row'}}>
                {row.map((cell, cellIndex) => (
                  <S.Cell key={`cell-${rowIndex}-${cellIndex}`}>{cell}</S.Cell>
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
