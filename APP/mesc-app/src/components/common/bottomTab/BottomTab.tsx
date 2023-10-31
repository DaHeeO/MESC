import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  LayoutChangeEvent,
} from 'react-native';
import Svg, {Defs, Mask, Rect, Path, G} from 'react-native-svg';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

// components
import Main from '../../../screens/main/Main';
import Contacts from '../../../screens/contacts/Contacts';
import Messages from '../../../screens/messages/Messages';
import Settings from '../../../screens/settings/Settings';

// icon
import BottomTabIcon from './BottomTabIcon';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {},
  activeBackground: {
    position: 'absolute',
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  component: {
    height: 60,
    width: 60,
    marginTop: -5,
  },
  componentCircle: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 36,
    width: 36,
  },
});

function BottompTab() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    // 이걸 넣으면 Login으로 안가요
    // 부모의 컨텍스트 영향을 받지 않고 독립적으로 작동한대요
    // <NavigationContainer independent={true}>
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              darkMode={darkMode}
              focused={focused}
              type="contacts"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon darkMode={darkMode} focused={focused} type="main" />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              darkMode={darkMode}
              focused={focused}
              type="messages"
            />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon
              darkMode={darkMode}
              focused={focused}
              type="settings"
            />
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default BottompTab;
