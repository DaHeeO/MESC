import React, {useState} from 'react';
import {ScrollView, Modal, Text, TouchableOpacity, View} from 'react-native';
import * as S from './Query.styles';
import {useRecoilValue, useRecoilState} from 'recoil';
import {ModalDataState} from '../../../states/ModalDataState';

interface QueryProps {
  query: string;
}

const Query: React.FC<QueryProps> = ({query}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useRecoilState(ModalDataState);

  // 모달을 표시하는 함수
  const showModal = () => {
    setModalVisible(true);
  };

  // 모달을 숨기는 함수
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <S.QueryBox onPress={showModal}>
            <S.Query>{query}</S.Query>
          </S.QueryBox>
        </ScrollView>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}>
        <S.QueryContainer>
          <TouchableOpacity onPress={hideModal}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Query query={query} />
        </S.QueryContainer>
      </Modal>
    </>
  );
};

export default Query;
