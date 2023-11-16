import React, {useState} from 'react';
import {Alert} from 'react-native';
import * as S from './LogLevelForm.styles';
import Check from '../../../assets/icons/check.svg';
import {OkayBtn} from '../../message/Btn/SaveBtn';
import {BlockType} from '../../../const/constants';
import {customAxios, getBlock, getUserRole} from '../../../../Api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {LogSearchOption} from '../../../states/LogSearchOption';
import {ChatbotHistoryState} from '../../../states/ChatbotHistoryState';
import UserMessage from '../../chat/UserMessage';

const logLevels = ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'];

const LogLevelForm = () => {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);
  // 모달 띄우기 관련
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);

  const [block, setBlock] = useRecoilState(BlockResponseData);

  // 로그 레벨 저장
  const [logSearchOption, setLogSearchOption] = useRecoilState(LogSearchOption);

  const [selectedLevels, setSelectedLevels] = useState(new Set());

  // 로그 레벨 버튼 눌렀을 때
  const toggleLevel = (level: string) => {
    const newSelectedLevels = new Set(selectedLevels);
    if (newSelectedLevels.has(level)) {
      newSelectedLevels.delete(level);
    } else {
      newSelectedLevels.add(level);
    }
    setSelectedLevels(newSelectedLevels);
  };

  // 로그 레벨 선택 된것들 배열로 저장
  const selectedLevelsArray: string[] = [];

  for (const level of selectedLevels) {
    const option: string = level as string;
    selectedLevelsArray.push(option);
  }

  // 완료 버튼 눌렀을 때
  const submit = async () => {
    if (selectedLevelsArray.length === 0) {
      Alert.alert('로그 레벨을 선택해주세요.');
      return;
    }
    setIsModalVisible(false);
    setChatbotHistory([
      ...chatbotHistory,
      <UserMessage message={selectedLevelsArray.toString()} />,
    ]);
    setLogSearchOption(prev => ({
      ...prev,
      levelList: selectedLevelsArray,
    }));

    const newBlock = await getBlock(BlockType.LogOutput, logSearchOption);

    if (newBlock) setBlock(newBlock);
  };

  return (
    <S.LogLevelFormContainer>
      <S.ButtonBox>
        <S.Button onPress={submit}>
          <S.ButtonText>완료</S.ButtonText>
          {/* {OkayBtn({
            content: '저장',
            // height: '40px',
            onPress: () => {
              submit();
            },
          })} */}
        </S.Button>
      </S.ButtonBox>
      <S.Title>로그 레벨</S.Title>
      {logLevels.map(level => (
        <S.LogLevelItem key={level} onPress={() => toggleLevel(level)}>
          <S.LogLevelText>{level}</S.LogLevelText>
          <S.CheckboxContainer onPress={() => toggleLevel(level)}>
            {selectedLevels.has(level) ? (
              <Check />
            ) : (
              <S.Checkbox checked={false} />
            )}
          </S.CheckboxContainer>
        </S.LogLevelItem>
      ))}
    </S.LogLevelFormContainer>
  );
};

export default LogLevelForm;
