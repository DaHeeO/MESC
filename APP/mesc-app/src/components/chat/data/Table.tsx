import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  Text,
} from 'react-native';
import * as S from './Teble.styles';
import {useRecoilValue} from 'recoil';
import {TableTitleState} from '../../../states/DataTitleState';
import {tr} from 'date-fns/locale';

type TableProps = {
  title?: string;
  columnName: string[];
  columnType: string[];
  rowList: any[][];
  isModal: boolean;
};

const Table: React.FC<TableProps> = ({
  title,
  columnName,
  columnType,
  rowList,
  isModal,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    rowIndex: number;
    content: string[];
  } | null>(null);

  // 셀 클릭 이벤트 핸들러
  const handleRowPress = (rowIndex: any, row: any) => {
    if (isModal) return;
    // console.log(`Row ${rowIndex} was pressed`, row);
    setSelectedRow({rowIndex, content: row});
    setModalVisible(true);
  };

  // 모달 숨기는 함수
  const hideModal = () => setModalVisible(false);

  const tableHeader = makeHeader(title);

  function makeHeader(title: String | undefined) {
    if (!title) return <></>;
    return (
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Button></S.Button>
      </S.Header>
    );
  }

  return (
    <S.Container>
      <S.Table>
        {tableHeader}
        <S.Body>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <View style={{flexDirection: 'row'}}>
                {columnName.map((column, index) => (
                  <S.ColumnInfoBox key={`header-${index}`}>
                    <S.ColumnName>{column}</S.ColumnName>
                  </S.ColumnInfoBox>
                ))}
              </View>
              <View style={{flexDirection: 'row'}}>
                {columnType.map((type, index) => (
                  <S.ColumnInfoBox key={`type-${index}`}>
                    <S.ColumnType>{type}</S.ColumnType>
                  </S.ColumnInfoBox>
                ))}
              </View>
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                {rowList.map((row, rowIndex) => (
                  <TouchableOpacity
                    key={`row-${rowIndex}`}
                    style={{flexDirection: 'row'}}
                    onPress={() => handleRowPress(rowIndex, row)}>
                    {row.map((cell, cellIndex) => (
                      <S.CellBox key={`cell-${rowIndex}-${cellIndex}`}>
                        <S.Cell>{cell}</S.Cell>
                      </S.CellBox>
                    ))}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </S.Body>
      </S.Table>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}>
        <S.ModalContainer>
          {/* 모달을 닫는 버튼 */}
          <TouchableOpacity onPress={hideModal}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Table
            title={title}
            columnName={columnName}
            columnType={columnType}
            rowList={rowList}
            isModal={true}
          />
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
};
export default Table;
