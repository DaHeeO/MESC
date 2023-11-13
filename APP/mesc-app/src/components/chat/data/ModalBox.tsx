import React, {useRef, useState} from 'react';
import {PanResponder} from 'react-native';
import * as S from './ModalBox.styles';
import Table from './Table';
import Query from './Query';
import Close from '../../../assets/icons/close.svg';
import {vi} from 'date-fns/locale';

type ModalBoxProps = {
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
  onPress: () => void;
  isModal?: boolean;
};

const ModalBox: React.FC<ModalBoxProps> = ({
  title,
  table,
  query,
  onPress,
  isModal,
}) => {
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

  const handleRowPress = (rowIndex: any, row: any) => {
    if (isModal) return;
  };

  const renderContent = () => {
    if (table) {
      // console.log('table=========================================');
      // console.log(table);
      return (
        <Table
          title={title}
          columnName={table.columnNameList}
          columnType={table.columnTypeList}
          rowList={table.rowList}
          isModal={true}
        />
      );
    } else if (query) {
      return <Query title={title} query={query} isModal={true} />;
    }
  };

  return (
    <S.Container>
      <S.MadalContainer>
        <S.Header>
          <S.Button>
            <Close onPress={onPress} />
          </S.Button>
        </S.Header>
        <S.DataContainer {...panResponder.panHandlers}>
          {renderContent()}
        </S.DataContainer>
      </S.MadalContainer>
    </S.Container>
  );
};

export default ModalBox;
