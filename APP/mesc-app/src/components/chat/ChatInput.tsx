import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, TouchableOpacity, Alert} from 'react-native';
import axios, {Axios, AxiosResponse} from 'axios';
import _ from 'lodash';
import * as S from './ChatInput.styles';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';
import TouchID from 'react-native-touch-id';
import Toast from 'react-native-toast-message';
import {handleFingerPrint} from '../../components/figerprint/FingerPrint';
import {customAxios} from '../../../Api';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onAxiosResult: (result: any) => void;
}

const isTrue = true;

function ChatInput({onSendMessage, onAxiosResult}: ChatInputProps) {
  const [value, setValue] = useState('');

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
    if (input.trim() !== '') {
      //토큰

      // 조회

      // 수정, 추가, 삭제
      let fingerResult = await handleFingerPrint();
      if (fingerResult === '지문인식 성공') {
        onSendMessage(input); // 메시지를 부모 컴포넌트인 Chat로 전송
        setInput(''); // 입력 필드 지우기

        customAxios
          .post(`api/developer/query`, {query: input})
          .then(response => {
            if (response.status == 200) {
              // 결과 값 담기
              // statusCode, message, data.modifiedCount
              const result = response.data;
              onAxiosResult(result);
            } else {
              console.log('에러');
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        // 지문인식 실패
      }
    } else {
      console.log('공백입니다요');
    }
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
          // editable={isTrue ? true : false}
        />
        <S.SendBox>
          <Send onPress={handleSendButtonPress} />
        </S.SendBox>
      </S.ChatInput>
    </S.Input>
  );
}

export default ChatInput;
