import React, {useRef} from 'react';
import {PanResponder} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import * as S from './PreViewBox.styles';
import Table from './Table';
import Query from './Query';
import ChatbotProfile from '../ChatbotProfileComponent';
import {OkayBtn} from '../../../components/message/Btn/SaveBtn';
import {CommitQuery} from '../../../states/CommitQuery';
import {getBlock} from '../../../../Api';
import {BlockType} from '../../../const/constants';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {handleFingerPrint} from '../../../components/figerprint/FingerPrint';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import UserMessage from '../../../components/chat/UserMessage';

type PreViewBoxProps = {
  title?: string;
  table?:
    | {
        columnNameList: string[];
        columnTypeList: string[];
        rowList: string[][];
      }
    | undefined
    | null;
  onPress?: () => void;
  isModal?: boolean;
  showButton?: boolean;
};

const PreViewBox: React.FC<PreViewBoxProps> = ({
  title,
  table,
  onPress,
  showButton,
}) => {
  // commitQuery 관련
  const [commitQuery, setCommitQuery] = useRecoilState(CommitQuery);
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  const putBlockToRecoil = async (blockId: number, body: object) => {
    const newBlock = await getBlock(blockId, body);

    if (newBlock) setBlock(newBlock);
    return newBlock;
  };

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
          showButton={showButton}
        />
      );
    }
  };

  return (
    <S.DataBoxContainer {...panResponder.panHandlers}>
      {renderContent()}
      {OkayBtn({
        content: 'Commit',
        height: '30px',
        onPress: async () => {
          if (await handleFingerPrint()) {
            setChatbotHistory(prev => [
              ...prev,
              <UserMessage message={commitQuery as string} />,
            ]);
            putBlockToRecoil(BlockType.OperationOutput, {query: commitQuery});
          }
        },
      })}
      {OkayBtn({
        content: 'Rollback',
        height: '30px',
        onPress: () => {
          setChatbotHistory(prev => [
            ...prev,
            <UserMessage message={'Rollback'} />,
          ]);
          putBlockToRecoil(BlockType.QueryInput, {});
        },
      })}
    </S.DataBoxContainer>
  );
};

export default PreViewBox;
