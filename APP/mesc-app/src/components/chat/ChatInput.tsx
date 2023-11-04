import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import * as S from './ChatInput.styles';
import Header from '../common/chatHeader/ChatHeader';
import ChatbotProfile from '../../components/chat/ChatbotProfileComponent';
import Plus from '../../assets/icons/plus.svg';
import Send from '../../assets/icons/send.svg';

function ChatInput() {
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
      const response = await axios.get(
        'http://10.0.2.2:8080/mes/autocomplete',
        {params: {prefix: kw}},
      );
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
    console.log(lastWord);
    if (lastWord.trim() !== '') {
      setKeyword(lastWord);
      setIsWordSelected(false);
    } else {
      setSuggestions([]);
      setIsWordSelected(true);
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
          returnKeyType="go"></S.InputBox>
        <S.SendBox>
          <Send />
        </S.SendBox>
      </S.ChatInput>
    </S.Input>
  );
}

export default ChatInput;
