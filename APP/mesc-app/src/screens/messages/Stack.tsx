import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Messages from './Messages';
import Chat from '../../screens/chat/Chat2';

const Stack = createStackNavigator();

function MessageStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Messages">
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MessageStack;
