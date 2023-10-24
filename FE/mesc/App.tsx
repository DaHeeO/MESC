import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/login/Login';
import EmailOTP from './src/screens/login/EmailOTP';
import SMSOTP from './src/screens/login/SMSOTP';

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
          name="EmailOTP"
          component={EmailOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SMSOTP"
          component={SMSOTP}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
