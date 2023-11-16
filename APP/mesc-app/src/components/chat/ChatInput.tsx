import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, TouchableOpacity, Alert, View, Text} from 'react-native';
import _, {set} from 'lodash';
import * as S from './ChatInput.styles';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';
import Close from '../../assets/icons/x.svg';
import {customAxios, getBlock, getUserRole} from '../../../Api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ChatbotHistoryState} from '../../states/ChatbotHistoryState';
import UserMessage from '../../components/chat/UserMessage';
import {InputState} from '../../states/InputState';
import {BlockResponseData} from '../../states/BlockResponseState';
import {LogSearchOption} from '../../states/LogSearchOption';
import {BlockType} from '../../const/constants';
import {ConditionModifyState} from '../../states/BottomSheetState';
import {modalIdState} from '../../states/ModalIdState';
import {CommitQuery} from '../../states/CommitQuery';
import {MultipleCommitQuery} from '../..//states/MultipleCommitQuery';
import {handleFingerPrint} from '../../components/figerprint/FingerPrint';
import {ActionIdState, ActionIdTitleState} from '../../states/ReadDataState';
import ChatbotMessage from './ChatbotMessage';
import {ChatChooseSection1} from '../message/Btn/ChatChooseSection1';
import ChatbotProfile from './ChatbotProfileComponent';
import {Query} from './data/Query.styles';
import QueryResultMessage from './QueryResultMessage';

function ChatInput() {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

  // 다중 쿼리
  const [multipleCommitQuery, setMultipleCommitQuery] =
    useRecoilState(MultipleCommitQuery);

  // 모달 띄우기 관련
  const [isModalVisible, setIsModalVisible] =
    useRecoilState(ConditionModifyState);
  // 모달 id 관련
  const [modalId, setModalId] = useRecoilState(modalIdState);

  // commitQuery 관련
  const [commitQuery, setCommitQuery] = useRecoilState(CommitQuery);

  //actionId 관련
  const [actionId, setActionId] = useRecoilState(ActionIdState);

  //actionIdTitle 관련
  const [actionIdTitle, setActionIdTitle] = useRecoilState(ActionIdTitleState);

  // plus 버튼 눌렀을 때 효과
  const [inputShow, setInputShow] = useState(false);
  const [inputHeight, setInputHeight] = useState('70px');
  const [inputJustify, setInputJustify] = useState('center');
  const [showBox, setShowBox] = useState('none');
  const [noMagin, setNoMargin] = useState('0px');

  useEffect(() => {
    if (inputShow == true) {
      setInputHeight('140px');
      setInputJustify('space-between');
      setShowBox('flex');
      setNoMargin('15px');
    } else {
      setInputHeight('auto');
      setInputJustify('center');
      setShowBox('none');
      setNoMargin('0px');
    }
  }, [inputShow]);
  const [block, setBlock] = useRecoilState(BlockResponseData);

  const [inputState, setInputState] = useRecoilState(InputState);
  const [logSearchOption, setLogSearchOption] = useRecoilState(LogSearchOption);

  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isWordSelected, setIsWordSelected] = useState(false);

  const loadSuggestions = useCallback(async (kw: string) => {
    if (!kw) {
      setSuggestions([]);
      return;
    }

    // setLoading(true);
    try {
      const response = await customAxios.get('api/mesc/autocomplete', {
        params: {prefix: kw},
      });
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions', error);
      setSuggestions([]);
    } finally {
      // setLoading(false);
    }
  }, []);

  useEffect(() => {
    // isWordSelected가 true일 경우, 자동완성 기능을 비활성화합니다.
    if (isWordSelected) return;

    // lodash의 debounce 함수를 사용하여 입력 중에는 자동완성 요청을 지연시킵니다.
    const debouncedLoadSuggestions = _.debounce(
      () => loadSuggestions(keyword),
      500,
    );
    debouncedLoadSuggestions();

    // 컴포넌트 언마운트 시 debounce 함수를 취소합니다.
    return () => {
      debouncedLoadSuggestions.cancel();
    };
  }, [keyword, isWordSelected, loadSuggestions]);

  // 단어 클릭을 처리하는 함수
  const handleWordClick = (word: string) => {
    const words = input.split(' ');
    words.pop();
    words.push(word);
    setInput(words.join(' ') + ' ');
    setSuggestions([]);
    setIsWordSelected(true);
    setKeyword('');
  };

  // 입력 필드에서 포커스를 잃었을 때 추천 목록을 숨깁니다.
  const handleInputBlur = () => {
    setSuggestions([]);
    setIsWordSelected(true);
  };

  // 입력 필드에 포커스가 됐을 때 추천 목록을 표시합니다.
  const handleInputFocus = () => {
    setIsWordSelected(false);
    const lastWord = input.split(' ').pop() || '';
    if (lastWord.trim() !== '') {
      setKeyword(lastWord);
      loadSuggestions(lastWord);
    }
  };

  // 입력값이 변경될 때마다 마지막 단어를 추출해 keyword 상태를 업데이트합니다.
  const handleInputChange = (text: string) => {
    setInput(text);
    const lastWord = text.split(' ').pop() || '';
    if (lastWord.trim() !== '') {
      setKeyword(lastWord);
      setIsWordSelected(false);
    } else {
      setSuggestions([]);
      setIsWordSelected(true);
    }
  };

  // 전송 버튼을 눌렀을 때 처리하는 함수
  const handleSendButtonPress = async () => {
    setInputState(false);
    setTimeout(() => {
      setInputState(true);
    }, 2000);
    const userMessage = input.trim();
    if (userMessage === '') return;

    setChatbotHistory(prev => [...prev, <UserMessage message={userMessage} />]);
    if (userMessage === '/로그' || userMessage === '/쿼리') {
      // 혹시라도 데이터 조작 버튼을 누르고 바로 그냥 명령문을 누르고 싶을 때
      defaultInput(userMessage);

      setInput(''); // 입력 필드 지우기.
      return;
    }

    if (userMessage !== '') {
      const blockId = block.blockId;
      // recoil에서 block가져와서 blockId에 따라 처리
      if (
        blockId == BlockType.QueryInput ||
        (blockId == BlockType.RollbackOutput && !block.cardList[1].table)
      ) {
        // 직접입력 티카타카 하드코딩 하도록...
        // 명령어 or select, update, insert, delete
        queryInput(userMessage);
      } else if (blockId == BlockType.LogKeyword) {
        const keyword = userMessage;
        // 리코일에 추가
        setLogSearchOption(prev => ({...prev, keyword: keyword}));
        // setLogSearchOption({keyword: keyword, date: '', levelList: []});
        const bl = await putBlockToRecoil(BlockType.LogDate, {});
        setInput(''); // 입력 필드 지우기.
      } else if (blockId == BlockType.LogDate) {
        const date = userMessage;
        // 리코일에 추가
        setLogSearchOption(prev => ({...prev, date: date}));

        // 모달 띄우기
        setIsModalVisible(true);

        // 로그레벨에 맞는 modalId 설정
        setModalId('LF');

        putBlockToRecoil(BlockType.LogLevel, {});
        setInput(''); // 입력 필드 지우기.
      } else {
        defaultInput(userMessage);
      }
    } else {
      // 아무것도 입력하지 않고 전송할 경우
      Alert.alert('[명령어] 또는 [쿼리문]을 입력해주세요.');
    }
  };

  const defaultInput = async (userMessage: String) => {
    const role = await getRoleBlockId();
    if (userMessage === '/로그' && role === BlockType.DEVELOPER) {
      putBlockToRecoil(BlockType.LogKeyword, {});
    } else if (userMessage === '/쿼리' && role === BlockType.DEVELOPER) {
      putBlockToRecoil(BlockType.QueryInput, {});
    } else {
      putBlockToRecoil(role, {});
    }
    setInput(''); // 입력 필드 지우기.
  };

  const getRoleBlockId = async () => {
    const roleType = await getUserRole();
    if (roleType === 'DEVELOPER') {
      return BlockType.DEVELOPER;
    }
    return BlockType.WORKER;
  };

  const queryInput = async (userMessage: String) => {
    const upperQuery = userMessage.toUpperCase();

    if (upperQuery.startsWith('SELECT ')) {
      // 조회

      // 조회할 때 queryList도 같이 body에 보내주기

      const body = {
        query: userMessage,
        queryList: multipleCommitQuery,
      };

      const nextBlock: any = await putBlockToRecoil(
        BlockType.SelectOutput,
        body,
      );
      // 에러처리 추가해줘야함
      if (nextBlock.cardList[1].content.toLowerCase().includes('error')) {
        setInput(input);
      }
    } else if (
      // 수정, 추가, 삭제
      upperQuery.startsWith('UPDATE ') ||
      upperQuery.startsWith('INSERT ') ||
      upperQuery.startsWith('DELETE ')
    ) {
      const nextBlock: any = await putBlockToRecoil(BlockType.RollbackOutput, {
        query: userMessage,
      });

      setCommitQuery(userMessage);

      // 쿼리 에러 발생 했을 때 처리
      // 인풋창에 그대로 두기
      if (!nextBlock.cardList[1].table) {
        setInput(input);
      } else {
        // 다중 커밋 쿼리 배열에 추가
        setMultipleCommitQuery(prev => [...prev, userMessage]);
        setInput('');
      }
    } else {
      Alert.alert('쿼리문을 정확하게 작성해주세요');
      // putBlockToRecoil(BlockType.QueryInput, {});
    }
  };

  const putBlockToRecoil = async (blockId: number, body: object) => {
    const newBlock = await getBlock(blockId, body);

    if (newBlock) setBlock(newBlock);
    return newBlock;
  };

  // 커밋 버튼 눌렀을 때 처리하는 함수
  const commit = async () => {
    if (multipleCommitQuery.length === 0) {
      Alert.alert('Commit 할 데이터가 없습니다.');
      return;
    }
    if (await handleFingerPrint()) {
      // 지문인식이 성공 커밋 가능
      // 커밋 했으니 빈 배열로 초기화

      customAxios
        .post('api/developer/commit', {queryList: multipleCommitQuery})
        .then(response => {
          if (response.data.data.result) {
            //커밋 성공시
            const newBlock = putBlockToRecoil(BlockType.CommitResult, {});
            //배열 비우고
            setMultipleCommitQuery([]);
          } else {
            //커밋 실패시
            const newBlock = putBlockToRecoil(BlockType.CommitError, {});
          }
        });
    }
  };

  // 최근 본 공정 데이터
  const recentData = async () => {
    const body = {
      actionId: actionId,
      title: actionIdTitle,
      conditions: '',
      queryList: multipleCommitQuery.length > 0 ? multipleCommitQuery : null,
    };

    const nextBlock: any = await putBlockToRecoil(BlockType.SearchChocie, body);
  };

  // 롤백 버튼 함수
  const rollback = async () => {
    setChatbotHistory(prev => [...prev, <UserMessage message={'Rollback'} />]);
    putBlockToRecoil(BlockType.Rollback, {});
  };

  function getNewBlock(title: string) {
    let blockId = 11;
    if (title === '데이터') {
      blockId = BlockType.SearchList;
    } else if (title === '로그') {
      blockId = BlockType.LogKeyword;
    }
    return async () => {
      const newBlock = await putBlockToRecoil(blockId, {});
      if (blockId === BlockType.SearchList) {
        setIsModalVisible(true);
        loadSuggestions;
        setModalId('SF');
      }

      setInput('');
    };
  }

  function getData() {
    const blockId = BlockType.SearchList;

    return async () => {
      const newBlock = await putBlockToRecoil(blockId, {});
      setInput('');
    };
  }

  return (
    <S.Input>
      {suggestions.length > 0 && (
        <S.SuggestionsBox>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            horizontal
            showsHorizontalScrollIndicator={false}>
            {suggestions.map((word, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleWordClick(word)}>
                <S.WordBox>
                  <S.WordText>{word}</S.WordText>
                </S.WordBox>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </S.SuggestionsBox>
      )}
      <S.ChatInput height={inputHeight} justifyContent={inputJustify}>
        <S.OtherContainer marginTop={noMagin}>
          <S.PlusBox
            onPress={() => {
              setInputShow(!inputShow);
            }}>
            {inputShow ? (
              <Close style={{width: 24, height: 24}} />
            ) : (
              <Plus style={{width: 24, height: 24}} />
            )}
          </S.PlusBox>
          <S.InputBox
            value={input}
            onChangeText={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            placeholder="검색어를 입력해주세요."
            multiline={true}
            returnKeyType="go"
            editable={true}
          />
          <S.SendBox>
            <Send onPress={inputState ? handleSendButtonPress : undefined} />
          </S.SendBox>
        </S.OtherContainer>
        <S.HiddenContainer display={showBox}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.ButtonContainer>
              <S.ButtonBox onPress={recentData}>
                <S.ButtonText>최근공정조회</S.ButtonText>
              </S.ButtonBox>
              <S.ButtonBox onPress={commit}>
                <S.ButtonText>Commit</S.ButtonText>
              </S.ButtonBox>
              <S.ButtonBox onPress={rollback}>
                <S.ButtonText>Rollback</S.ButtonText>
              </S.ButtonBox>
              <S.ButtonBox onPress={getNewBlock('데이터')}>
                <S.ButtonText>데이터 조회</S.ButtonText>
              </S.ButtonBox>
              <S.ButtonBox onPress={getNewBlock('로그')}>
                <S.ButtonText>로그 조회</S.ButtonText>
              </S.ButtonBox>
            </S.ButtonContainer>
          </ScrollView>
        </S.HiddenContainer>
      </S.ChatInput>
    </S.Input>
  );
}

export default ChatInput;
