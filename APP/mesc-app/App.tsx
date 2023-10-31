import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/login/Login';
import FindId from './src/screens/login/FindId';
import FindPassword from './src/screens/login/FindPassword';
import ChangePassword from './src/screens/login/ChangePassword';
import Success from './src/screens/login/Success';
import Intro from './src/screens/intro/Intro';
import BottomTab from './src/components/common/bottomTab/BottomTab';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindId"
          component={FindId}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FindPassword"
          component={FindPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
