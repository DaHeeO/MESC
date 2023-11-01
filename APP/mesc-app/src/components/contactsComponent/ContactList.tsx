import React, {useEffect, useState, useRef} from 'react';
import {View, FlatList, Animated, Dimensions} from 'react-native';
import * as S from './ContactList.styles';
import ContactItem from './ContactItem';

interface IContactList {
  contactList: any[];
}

export default function ContactList({contactList}: IContactList) {
  function renderItem({item}: any) {
    return <ContactItem item={item} />;
  }

  return (
    <S.Container>
      <FlatList data={contactList} renderItem={renderItem}></FlatList>
    </S.Container>
  );
}
