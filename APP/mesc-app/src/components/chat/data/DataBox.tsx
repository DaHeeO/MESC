import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as S from './DataBox.styles';
import Table from './Table';
import Query from './Query';

type DataBoxProps = {
  key: React.Key;
  table?: {
    columnNameList: string[];
    columnTypeList: string[];
    rowList: any[][]; // or string[][]
  };
  query?: string;
  // 여기에 DataBox 컴포넌트에 사용할 다른 props들을 정의합니다.
};

const DataBox: React.FC<DataBoxProps> = ({key, table, query}) => {
  // table이 주어진 경우 header와 typeHeader를 설정합니다.
  const header = table?.columnNameList ?? [];
  const typeHeader = table?.columnTypeList ?? [];
  const body = table?.rowList ?? [];

  return (
    <S.DataContainer>
      {table ? (
        <Table header={header} typeHeader={typeHeader} body={body} />
      ) : query ? (
        <Query query={query} />
      ) : null}
    </S.DataContainer>
  );
};

export default DataBox;
