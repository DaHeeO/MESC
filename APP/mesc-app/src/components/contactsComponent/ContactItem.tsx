import React from 'react';
import {View, Text} from 'react-native';

interface IContactItem {
  item: {
    userId: number;
    ImageUrl: string;
    userName: string;
    userEmail: string;
  };
}

export default function OnBoardingItem({item}: IContactItem) {
  return (
    <View>
      <Text>{item.userId}</Text>
    </View>
  );
}
