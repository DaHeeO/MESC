import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as S from './DataBox.styles';
import Table from './Table';
import Query from './Query';

type DataBoxProps = {
  title?: string;
  table?: {
    columnNameList: string[];
    columnTypeList: string[];
    rowList: string[][];
  };
  query?: string;
};

const DataBox: React.FC<DataBoxProps> = ({title, table, query}) => {
  return (
    <S.DataBoxContainer>
      {table ? (
        <Table
          title={title}
          header={table.columnNameList}
          typeHeader={table.columnTypeList}
          body={table.rowList}
        />
      ) : query ? (
        <Query query={query} />
      ) : null}
    </S.DataBoxContainer>
  );
};

export default DataBox;
