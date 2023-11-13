import React, {useRef} from 'react';
import {PanResponder} from 'react-native';
import * as S from './DataBox.styles';
import Table from './Table';
import Query from './Query';

type DataBoxProps = {
  title?: string;
  table?:
    | {
        columnNameList: string[];
        columnTypeList: string[];
        rowList: string[][];
      }
    | undefined
    | null;
  query?: string;
  onPress?: () => void;
  isModal?: boolean;
};

const DataBox: React.FC<DataBoxProps> = ({title, table, query, onPress}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) > 10 || Math.abs(gestureState.dy) > 10) {
          // onPress();
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5) {
          onPress && onPress();
        }
      },
    }),
  ).current;

  const renderContent = () => {
    if (table) {
      return (
        <Table
          title={title}
          columnName={table.columnNameList}
          columnType={table.columnTypeList}
          rowList={table.rowList}
          isModal={false}
        />
      );
    } else if (query) {
      return <Query query={query} isModal={false} />;
    }
  };

  return (
    <S.DataBoxContainer {...panResponder.panHandlers}>
      {renderContent()}
    </S.DataBoxContainer>
  );
};

export default DataBox;
