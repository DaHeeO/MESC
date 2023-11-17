import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {Report} from './Report';

interface MessagesProps {
  navigation: any;
}

const Messages = ({navigation}: MessagesProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Messages</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text>Go to Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity>{/* <Report /> */}</TouchableOpacity>
    </View>
  );
};

export default Messages;
