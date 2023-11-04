import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';

interface MessagesProps {
  navigation: any;
}

const Messages = ({navigation}: MessagesProps) => {
  return (
    <View>
      <Text>Messages</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Text>Go to Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Log')}>
        <Text>Go to Log</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Messages;
