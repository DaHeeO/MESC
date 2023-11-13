import React, {useState} from 'react';
import {ScrollView, Modal, Text, TouchableOpacity, View} from 'react-native';
import * as S from './Query.styles';
import {useRecoilValue, useRecoilState} from 'recoil';
import {ModalDataState} from '../../../states/ModalDataState';
import ModalBox from './ModalBox';

interface QueryProps {
  query: string;
  isModal: boolean;
  title?: string;
}

const Query: React.FC<QueryProps> = ({query, isModal, title}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  // 모달을 표시하는 함수
  const showModal = () => {
    if (isModal) return;
    setModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      {/* <S.Header>
        <S.HeaderContainer>
          <S.Title>{title}</S.Title>
        </S.HeaderContainer>
      </S.Header> */}
      <S.QueryBox>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ScrollView
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <TouchableOpacity onPress={showModal}>
              <S.Query>{query}</S.Query>
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </S.QueryBox>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}>
        <ModalBox query={query} onPress={hideModal} />
      </Modal>
    </>
  );
};

export default Query;
