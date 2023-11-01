import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

interface ContactsProps {
  navigation: any;
}

const Detail = ({navigation}: ContactsProps) => {
  return (
    <View>
      <Text>Detail</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
        <Text>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Group')}>
        <Text>Group</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
