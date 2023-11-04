import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

const AutocompleteExample = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSuggestions = async () => {
      if (!input) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get('http://10.0.2.2:8080/mes/autocomplete', {
          params: { prefix: input },
        });
        setSuggestions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching suggestions', error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    // lodash의 debounce 함수를 사용하여 0.5초 동안 입력이 없을 때 요청을 보내도록 설정
    const debouncedLoadSuggestions = _.debounce(loadSuggestions, 500);
    debouncedLoadSuggestions();

    // 컴포넌트 언마운트 시 debounce 함수를 취소하여 메모리 누수를 방지
    return () => {
      debouncedLoadSuggestions.cancel();
    };
  }, [input]); 

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="SELECT * FROM"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}
    </View>
  );
};

export default AutocompleteExample;