//React
import React, {useState, useRef, useCallback} from 'react';
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
import {ConditionModify} from '../../common/id/ChatChooseId';
import {ConditionModifyState} from '../../../states/BottomSheetState';
import {modalIdState} from '../../../states/ModalIdState';
import ModalBox from './ModalBox';
import {getBlock, getCard, customAxios} from '../../../../Api';
import {drop, get} from 'lodash';
import {ConditionIdState} from '../../../states/ConditionIdState';
import {DropdownState} from '../../../states/DropdownState';
import {ActionIdState} from '../../../states/ReadDataState';
import {BlockType} from '../../../const/constants';

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
  // 모달 관련 여부
  const [isModalVisible, setModalVisible] =
    useRecoilState(ConditionModifyState);
  const [modalId, setModalId] = useRecoilState(modalIdState);
  const [conditionId, setConditionId] = useRecoilState(ConditionIdState);
  const [actionId, setActionId] = useRecoilState(ActionIdState);
  // const conditionId = useRecoilValue(ConditionIdState);
  const [isModalBoxVisible, setModalBoxVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    rowIndex: number;
    content: string[];
  } | null>(null);
  const [dropdown, setDropdown] = useRecoilState(DropdownState);
  const [AnctionId, setAnctionId] = useRecoilState(ActionIdState);
  const [touchedRow, setTouchedRow] = useState(null);
  const [data, setData] = useState(rowList);
  const [hasMore, setHasMore] = useState(true);

  // ///////////////////////////////////// 페이지네이션 코드 //////////////////////////////////
  // const observer = useRef();
  // const lastElementRef = useCallback(
  //   (node:any) => {
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver(entries => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         // 스크롤이 마지막 요소에 도달하면 새 데이터 로드
  //         loadMoreData();
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore],
  // );

  // // 데이터 로드 함수
  // const loadMoreData = async () => {
  //   // 데이터 로드 로직 (예: API 호출)
  //   const newData = await fetchData();
  //   setData(prevData => [...prevData, ...newData]);
  //   setHasMore(newData.length > 0); // 새 데이터가 없으면 더 이상 로드하지 않음
  // };

  // const fetchData = async () => {
  //   let num: number = 2;
  //   let conditions ='';

  //   await customAxios
  //     .post(`worker/data/${actionId}/${num}`, conditions)
  //     .then(response => {
  //       console.log('response================', response.data);
  //       const data = response.data;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   return data;
  // }/////////////////////////////////////////////////////////////////////////////////

  // 셀 너비 설정
  const minColumnWidth = 75;
  const maxColumnWidth = 200;

  const calculateMaxColumnLengths = (
    columnName: string[],
    columnType: string[],
    rowList: string[][],
  ) => {
    let maxLengths = Array(columnName.length).fill(0);
    for (let i = 0; i < columnName.length; i++) {
      maxLengths[i] = Math.max(columnName[i].length, columnType[i].length);
    }

    // rowList의 각 행과 열을 순회하면서 최대 길이 업데이트
    rowList.forEach(row => {
      row.forEach((item, index) => {
        maxLengths[index] = Math.max(maxLengths[index], String(item).length);
      });
    });

    return maxLengths;
  };

  // 너비 계산 로직
  const maxColumnLengths = calculateMaxColumnLengths(
    columnName,
    columnType,
    rowList,
  );

  const pixelsPerCharacter = 10; // 문자당 픽셀 값

  // 각 열의 동적 너비 계산
  const dynamicColumnWidths = maxColumnLengths.map(length =>
    Math.max(
      minColumnWidth,
      Math.min(length * pixelsPerCharacter, maxColumnWidth),
    ),
  );

  // 터치 시작 이벤트 핸들러
  const handleTouchStart = (rowIndex: any) => {
    setTouchedRow(rowIndex);
  };

  // 터치 종료 이벤트 핸들러
  const handleTouchEnd = () => {
    setTouchedRow(null);
  };

  // 터치된 행에 대한 배경색 적용
  const isTouched = (rowIndex: any) => {
    return touchedRow === rowIndex;
  };

  // 셀 클릭 이벤트 핸들러
  const handleRowPress = (rowIndex: any, row: any) => {
    if (isModal) return;
    // console.log(`Row ${rowIndex} was pressed`, row);
    setSelectedRow({rowIndex, content: row});
    setModalBoxVisible(true);
  };

  // 모달 숨기는 함수
  const hideModal = () => {
    // console.log('hideModal 호출');
    setModalBoxVisible(false);
  };

  const handlePress = async () => {
    // 여기서 modal true로 바꿔주기
    setModalVisible(true);

    const cardId = parseInt(conditionId, 10);
    const card = await getCard(cardId, {});
    const dropdownList = card.dropdown;

    // 리코일에 조건변경 데이터 담기
    setDropdown(dropdownList);

    // 필요한 추가 작업을 수행합니다.
    setModalId('CF');
  };

  const tableHeader = makeHeader(title);
  function makeHeader(title: String | undefined) {
    if (!title) return <></>;

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
                    onPressIn={() => handleTouchStart(rowIndex)}
                    onPressOut={handleTouchEnd}
                    style={[
                      {flexDirection: 'row'},
                      isTouched(rowIndex) && {
                        backgroundColor: 'rgba(123, 178, 233, 0.5)',
                      }, // 터치된 행에 배경색 적용
                    ]}
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
        visible={isModalBoxVisible}
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
