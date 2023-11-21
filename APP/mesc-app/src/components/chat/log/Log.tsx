import React, {useState, useEffect} from 'react';
import {ScrollView, Modal} from 'react-native';
import {Card} from '../../../states/CardState';
import * as S from './Log.styles';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import ModalBox from '../../chat/data/ModalBox';

// 모든 로그 레벨을 포함하도록 타입 정의 업데이트
interface LogEntry {
  timestamp: string;
  level: string;
  thread: string;
  logger: string;
  message: string;
  isModal?: boolean;
}

const Log = (props: {card: Card}) => {
  const {card} = props;
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModal, setisModal] = useState(false);

  // 모달을 표시하는 함수
  const showModal = () => {
    if (isModal) return;
    setModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const logData: string | null | undefined = card.logs;
    const logEntries = logData ? logData.trim().split('\n') : [];

    const logDetails = logEntries
      .map((entry: string) => {
        const pattern =
          /(\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}\.\d{3}) (\w+) +\[(.*?)\] (\S+)\[(.*?) : (\d+)\] - (.*)/;

        const match = entry.match(pattern);

        if (match) {
          return {
            timestamp: match[1],
            level: match[2],
            thread: match[3],
            logger: `${match[4]}[${match[5]} : ${match[6]}]`,
            message: match[7],
          };
        }

        return null; // 패턴과 맞지 않거나 필요하지 않은 경우 null을 반환합니다.
      })
      .filter((entry: LogEntry | null): entry is LogEntry => entry !== null); // null 값을 제거합니다.

    setLogs(logDetails); // 상태를 업데이트합니다.
  }, []);

  return (
    <S.LogContainer>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={showModal}>
            {logs.map((log, index) => (
              <S.LogItem key={index}>
                {/* 각 LogItem에 가로 스크롤 추가 */}
                <S.DefaultText>{log.timestamp}</S.DefaultText>
                <S.LogText level={log.level}>{log.level}</S.LogText>
                <S.DefaultText>{log.thread}</S.DefaultText>
                <S.LoggerText>{log.logger}</S.LoggerText>
                <S.DefaultText>{log.message}</S.DefaultText>
              </S.LogItem>
            ))}
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}>
        <ModalBox log={logs} onPress={hideModal} />
      </Modal>
    </S.LogContainer>
  );
};

export default Log;
