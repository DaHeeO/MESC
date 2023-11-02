import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from '../intro/Intro.styles';

function Messages({navigation}: any) {
  return (
    <View>
      <Text>Messages</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text>Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Messages;
