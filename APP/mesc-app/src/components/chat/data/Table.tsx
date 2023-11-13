//React
import React, {useState} from 'react';
//Style
import {
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Text,
  Dimensions,
} from 'react-native';
import * as S from './Teble.styles';
import {AboutChatBtn} from '../../../components/message/Btn/ChatChooseBtn';
//Recoil
import {useRecoilState, useRecoilValue} from 'recoil';
import {ConditionModify, CloseModal} from '../../common/id/ChatChooseId';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {modalIdState} from '../../../states/ModalIdState';
import ModalBox from './ModalBox';
import {getCard} from '../../../../Api';
import {drop, get} from 'lodash';
import {ConditionIdState} from '../../../states/ConditionIdState';
import {DropdownState} from '../../../states/DropdownState';

type TableProps = {
  title?: string;
  columnName: string[];
  columnType: string[];
  rowList: any[][];
  isModal: boolean;
  showButton?: boolean;
  onPress?: () => void;
};

const Table: React.FC<TableProps> = ({
  title,
  columnName,
  columnType,
  rowList,
  isModal,
  showButton,
  onPress,
}) => {
  const [openCoditionForm, setOpenCoditionForm] =
    useRecoilState(ConditionModifyState);
  const [modalId, setModalId] = useRecoilState(modalIdState);
  // const [conditionId, setConditionId] = useRecoilState(ConditionIdState);
  const conditionId = useRecoilValue(ConditionIdState);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    rowIndex: number;
    content: string[];
  } | null>(null);
  const [dropdown, setDropdown] = useRecoilState(DropdownState);

  const minColumnWidth = 75;
  const maxColumnWidth = 200;
  const calculateMaxColumnLengths = (rowList: string[][]) => {
    return rowList[0].map((_, colIndex) =>
      Math.max(...rowList.map(row => String(row[colIndex]).length)),
    );
  };

  // 너비 계산 로직
  const maxColumnLengths = calculateMaxColumnLengths(rowList);
  const pixelsPerCharacter = 10; // 문자당 픽셀 값

  // 각 열의 동적 너비 계산
  const dynamicColumnWidths = maxColumnLengths.map(length =>
    Math.max(
      minColumnWidth,
      Math.min(length * pixelsPerCharacter, maxColumnWidth),
    ),
  );

  // 셀 클릭 이벤트 핸들러
  const handleRowPress = (rowIndex: any, row: any) => {
    if (isModal) return;
    // console.log(`Row ${rowIndex} was pressed`, row);
    setSelectedRow({rowIndex, content: row});
    setModalVisible(true);
  };
  // 모달 숨기는 함수
  const hideModal = () => {
    console.log('hideModal 호출');
    setModalVisible(false);
  };

  const handlePress = async () => {
    setOpenCoditionForm(!openCoditionForm);
    setModalId('CF');
    const cardId = parseInt(conditionId, 10);
    console.log('cardId', cardId);
    const card = await getCard(cardId, {});

    // console.log('card', card);
    const dropdownList = card.dropdown;

    console.log('dropdownList', dropdownList);
    // 필요한 추가 작업을 수행합니다.
  };

  const tableHeader = makeHeader(title);
  function makeHeader(title: String | undefined) {
    if (!title) return <></>;
    // const [openCoditionForm, setOpenCoditionForm] =
    //   useRecoilState(ConditionModifyState);
    // const [modalId, setModalId] = useRecoilState(modalIdState);
    return (
      <S.Header>
        <S.HeaderContainer>
          <S.Title>{title}</S.Title>
          {showButton && (
            <S.Button>
              <ConditionModify onPress={handlePress} />
            </S.Button>
          )}
        </S.HeaderContainer>
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
                  <S.ColumnNameBox
                    key={`header-${index}`}
                    style={{width: dynamicColumnWidths[index]}}>
                    <S.ColumnName>{column}</S.ColumnName>
                  </S.ColumnNameBox>
                ))}
              </View>
              <View style={{flexDirection: 'row'}}>
                {columnType.map((type, index) => (
                  <S.ColumnTypeBox
                    key={`type-${index}`}
                    style={{width: dynamicColumnWidths[index]}}>
                    <S.ColumnType>{type}</S.ColumnType>
                  </S.ColumnTypeBox>
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
                      <S.CellBox
                        key={`cell-${rowIndex}-${cellIndex}`}
                        style={{width: dynamicColumnWidths[cellIndex]}}>
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
        <ModalBox
          title={title}
          table={{
            columnNameList: columnName,
            columnTypeList: columnType,
            rowList: rowList,
          }}
          onPress={hideModal}
        />
      </Modal>
    </S.Container>
  );
};
export default Table;
