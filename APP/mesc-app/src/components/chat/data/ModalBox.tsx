import React, {useRef, useState} from 'react';
import {PanResponder, ScrollView, TouchableOpacity} from 'react-native';
import * as S from './ModalBox.styles';
import Table from './Table';
import Query from '../../chat/data/Query';
// import {CloseModal} from '../../common/id/ChatChooseId';
import Close from '../../../assets/icons/close.svg';
import Log from '../../../components/chat/log/Log';

type ModalBoxProps = {
  title?: string;
  table?:
    | {
        columnNameList: string[];
        columnTypeList: string[];
        rowList: string[][];
        isLastPage?: boolean;
        rowCnt?: number;
        totalCnt?: number;
      }
    | undefined
    | null;
  query?: string;
  onPress: () => void;
  isModal?: boolean;
  log?: LogEntry[];
  cardType?: string;
  // rowCnt?: number;
  // totalCnt?: number;
};

type LogEntry = {
  timestamp: string;
  level: string;
  thread: string;
  logger: string;
  message: string;
};

const ModalBox: React.FC<ModalBoxProps> = ({
  title,
  table,
  query,
  onPress,
  isModal,
  log,
  cardType,
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
          rowCnt={table.rowCnt}
          totalCnt={table.totalCnt}
          isLastPage={table.isLastPage}
          isModal={true}
          cardType={cardType}
        />
      );
    } else if (query) {
      return <Query title={title} query={query} isModal={true} />;
    } else if (log) {
      // console.log('log=========================================');
      // console.log(log);
      return (
        <S.LogContainer>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              <TouchableOpacity>
                {log.map((logItem, index) => (
                  <S.LogItem key={index}>
                    {/* 각 LogItem에 가로 스크롤 추가 */}
                    <S.DefaultText>{logItem.timestamp}</S.DefaultText>
                    <S.LogText level={logItem.level}>{logItem.level}</S.LogText>
                    <S.DefaultText>{logItem.thread}</S.DefaultText>
                    <S.LoggerText>{logItem.logger}</S.LoggerText>
                    <S.DefaultText>{logItem.message}</S.DefaultText>
                  </S.LogItem>
                ))}
              </TouchableOpacity>
            </ScrollView>
          </ScrollView>
        </S.LogContainer>
      );
      // showLog(log);
    }
  };

  return (
    <S.Container>
      <S.MadalContainer>
        <S.Header>
          <S.CloseBtn onPress={onPress}>
            <S.CloseText>닫기</S.CloseText>
          </S.CloseBtn>
        </S.Header>
        <S.DataContainer {...panResponder.panHandlers}>
          {renderContent()}
        </S.DataContainer>
      </S.MadalContainer>
    </S.Container>
  );
};

export default ModalBox;
