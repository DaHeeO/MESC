import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

interface ContactsProps {
  navigation: any;
}

const Group = ({navigation}: ContactsProps) => {
  return (
    <View>
      <Text>Group</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
        <Text>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Group;
