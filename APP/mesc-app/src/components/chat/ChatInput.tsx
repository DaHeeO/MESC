import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, TouchableOpacity, Alert} from 'react-native';
import axios, {Axios, AxiosResponse} from 'axios';
import _, {set} from 'lodash';
import * as S from './ChatInput.styles';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';
import {handleFingerPrint} from '../../components/figerprint/FingerPrint';
import {customAxios, getBlock, getUserRole} from '../../../Api';
import {useRecoilState, useRecoilValue} from 'recoil';
import {ChatbotHistoryState} from '../../states/ChatbotHistoryState';
import UserMessage from '../../components/chat/UserMessage';
import {InputState} from '../../states/InputState';
import {BlockResponseData} from '../../states/BlockResponseState';
import {LogSearchOption} from '../../states/LogSearchOption';
import {BlockType} from '../../const/constants';

function ChatInput() {
  const [chatbotHistory, setChatbotHistory] =
    useRecoilState(ChatbotHistoryState);

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

    setLoading(true);
    try {
      const response = await customAxios.get('api/mesc/autocomplete', {
        params: {prefix: kw},
      });
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
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
    // console.log(lastWord);
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
    const userMessage = input.trim();

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
      if (blockId == BlockType.QueryInput) {
        // 직접입력 티카타카 하드코딩 하도록...
        // 명령어 or select, update, insert, delete
        queryInput(userMessage);
      } else if (blockId == BlockType.LogKeyword) {
        const keyword = userMessage;
        // 리코일에 추가
        setLogSearchOption(prev => ({...prev, keyword: keyword}));
        // setLogSearchOption({keyword: keyword, date: '', levelList: []});
        putBlockToRecoil(BlockType.LogDate, {});
      } else if (blockId == BlockType.LogDate) {
        const date = userMessage;
        // 리코일에 추가
        setLogSearchOption(prev => ({...prev, date: date}));
        putBlockToRecoil(BlockType.LogLevel, {});
      } else {
        defaultInput(userMessage);
      }
      setInput(''); // 입력 필드 지우기.
    } else {
      // 아무것도 입력하지 않고 전송할 경우
      Alert.alert('명령어 또는 데이터 조작의 쿼리문을 입력해주세요.');
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
      const nextBlock: any = putBlockToRecoil(BlockType.SelectOutput, {
        query: userMessage,
      });
      // 에러처리 추가해줘야함
      if (nextBlock.cardList[1].content.toLowerCase().includes('error')) {
        setInput(input);
      }
    } else if (
      // 수정, 추가, 삭제
      upperQuery.startsWith('UPDATE ') ||
      upperQuery.startsWith('INSERNT ') ||
      upperQuery.startsWith('DELETE ')
    ) {
      const nextBlock: any = putBlockToRecoil(BlockType.OperationOutput, {
        query: userMessage,
      });

      // 쿼리 에러 발생 했을 때 처리
      // 인풋창에 그대로 두기
      if (nextBlock.cardList[1].content.toLowerCase().includes('error')) {
        setInput(input);
      }
    } else {
      Alert.alert('쿼리문을 정확하게 작성해주세요');
      putBlockToRecoil(BlockType.QueryInput, {});
    }
  };

  const putBlockToRecoil = async (blockId: number, body: object) => {
    const newBlock = await getBlock(blockId, body);

    if (newBlock) setBlock(newBlock);
    return newBlock;
  };

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
      <S.ChatInput>
        <S.PlusBox>
          <Plus />
        </S.PlusBox>
        <S.InputBox
          value={input}
          onChangeText={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder="검색어를 입력해주세요."
          multiline={true}
          returnKeyType="go"
          editable={inputState ? true : false}
        />
        <S.SendBox>
          <Send onPress={handleSendButtonPress} />
        </S.SendBox>
      </S.ChatInput>
    </S.Input>
  );
}

export default ChatInput;
