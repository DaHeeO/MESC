import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {useReducer} from 'react';
import {StyleSheet, View, Text, LayoutChangeEvent} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import * as S from './BottomTab.styles';

// components
import Main from '../../../screens/main/Main';
import ContactStack from '../../../screens/contacts/Stack';
import Message from '../../../screens/messages/Messages';
import Setting from '../../../screens/settings/Settings';

// icon
import BottomTabIcon from './NavIcon';

const Tab = createBottomTabNavigator();

const AnimatedTabBar = ({
  state: {index: activeIndex, routes},
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const reducer = (state: any, action: {x: number; index: number}) => {
    return [...state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  return (
    <View style={animationStyles.tabBarContainer}>
      {routes.map((route, index) => {
        const active = index === activeIndex;
        const {options} = descriptors[route.key];

        return (
          <TabBarComponent
            key={route.key}
            active={active}
            options={options}
            onLayout={e => handleLayout(e, index)}
            onPress={() => navigation.navigate(route.name)}
          />
        );
      })}
    </View>
  );
};

type TabBarComponentProps = {
  active?: boolean;
  options: BottomTabNavigationOptions;
  onLayout: (e: LayoutChangeEvent) => void;
  onPress: () => void;
};

const TabBarComponent = ({active, options, onPress}: TabBarComponentProps) => {
  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(active ? 1 : 0.5, {duration: 200}),
    };
  });

  return (
    <S.Container>
      <S.PressableContainer onPress={onPress}>
        <Animated.View
          style={[animationStyles.iconContainer, animatedIconContainerStyles]}>
          {options.tabBarIcon && typeof options.tabBarIcon === 'function' ? (
            options.tabBarIcon({
              focused: active ? active : false,
              color: '#000',
              size: 24,
            })
          ) : (
            <Text>No Icon</Text>
          )}
          {options.tabBarLabel && typeof options.tabBarLabel === 'function' ? (
            options.tabBarLabel({
              focused: active ? active : false,
              color: '#000',
              position: 'below-icon',
              children: 'Home',
            })
          ) : (
            <Text>No Icon</Text>
          )}
        </Animated.View>
      </S.PressableContainer>
    </S.Container>
  );
};

function BottompTab() {
  return (
    <Tab.Navigator
      tabBar={props => <AnimatedTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Main">
      <Tab.Screen
        name="Contact"
        component={ContactStack}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="Contact" />
          ),
          tabBarLabel: () => <S.Text>연락처</S.Text>,
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="Main" />
          ),
          tabBarLabel: () => <S.Text>홈</S.Text>,
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="Message" />
          ),
          tabBarLabel: () => <S.Text>채팅</S.Text>,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <BottomTabIcon focused={focused} type="Setting" />
          ),
          tabBarLabel: () => <S.Text>설정</S.Text>,
        }}
      />
    </Tab.Navigator>
  );
}

const animationStyles = StyleSheet.create({
  tabBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '9%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
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
});

export default BottompTab;
