import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/login/Login';
import FindId from './src/screens/login/FindId';
import FindPassword from './src/screens/login/FindPassword';
import ChangePassword from './src/screens/login/ChangePassword';
import Success from './src/screens/login/Success';
import Main from './src/screens/main/Main';
import Intro1 from './src/screens/intro/Intro1';
import Intro2 from './src/screens/intro/Intro2';
import Intro3 from './src/screens/intro/Intro3';

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
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro1"
          component={Intro1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
