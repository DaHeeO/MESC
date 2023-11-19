//React
import React, {useState, useRef, useCallback, useEffect} from 'react';
import Spinner from 'react-native-spinkit';
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
import {drop, get, set} from 'lodash';
import {ConditionIdState} from '../../../states/ConditionIdState';
import {DropdownState} from '../../../states/DropdownState';
import {ActionIdState} from '../../../states/ReadDataState';
import {BlockType} from '../../../const/constants';
import {is} from 'date-fns/locale';
import {ConditionState} from '../../../states/ConditionState';
import {MultipleCommitQuery} from '../../../states/MultipleCommitQuery';
import {SingleTableQueryState} from '../../../states/SingleTableQueryState';

type TableProps = {
  title?: string;
  columnName: string[];
  columnType: string[];
  rowList: any[][];
  isModal: boolean;
  showButton?: boolean;
  onPress?: () => void;
  query?: string | undefined;
  rowCnt?: number;
  totalCnt?: number;
  cardType?: string;
  isLastPage?: boolean;
  isLoading?: boolean;
};

const Table: React.FC<TableProps> = ({
  title,
  columnName,
  columnType,
  rowList,
  isModal,
  showButton,
  onPress,
  query,
  rowCnt,
  totalCnt,
  cardType,
  isLastPage,
  isLoading,
}) => {
  // 모달 관련 여부
  const [isModalVisible, setModalVisible] =
    useRecoilState(ConditionModifyState);
  const [modalId, setModalId] = useRecoilState(modalIdState);
  const [conditionId, setConditionId] = useRecoilState(ConditionIdState);
  const [conditionState, setConditionState] = useRecoilState(ConditionState);
  const [actionId, setActionId] = useRecoilState(ActionIdState);

  // 다중 커밋관련
  const multipleCommitQuery = useRecoilValue(MultipleCommitQuery);
  const singleTableQuery = useRecoilValue(SingleTableQueryState);

  // const conditionId = useRecoilValue(ConditionIdState);
  const [isModalBoxVisible, setModalBoxVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{
    rowIndex: number;
    content: string[];
  } | null>(null);
  const [dropdown, setDropdown] = useRecoilState(DropdownState);
  const [AnctionId, setAnctionId] = useRecoilState(ActionIdState);
  const [touchedRow, setTouchedRow] = useState(null);
  const [IsLastPage, setIsLastPage] = useState(isLastPage);
  const [moreRowList, setMoreRowList] = useState(rowList);
  const [currentPage, setCurruntPage] = useState(2);
  const [loading, setLoading] = useState(isLoading);
  // 보여지는 rowCnt, totalCnt
  const [rowCnt2, setRowCnt2] = useState(rowCnt);
  const [totalCnt2, setTotalCnt2] = useState(totalCnt);
  const [tableType, setTableType] = useState(cardType);

  useEffect(() => {
    setRowCnt2(rowCnt);
    setTotalCnt2(totalCnt);
    setTableType(cardType);
    setMoreRowList(rowList);
    setIsLastPage(isLastPage);
  }, [rowCnt, totalCnt, cardType, rowList, isLastPage]);

  // useEffect(() => {
  //   setIsLastPage(IsLastPage);
  // }, [IsLastPage]);
  // console.log('IsLastPage', IsLastPage);
  // console.log('Table쪽 rowCnt!!!!!!!!!!!!!!!!!!!!!!', rowCnt2);
  // console.log('Table쪽 totalCnt!!!!!!!!!!!!!!!!!!!!!!', totalCnt2);

  // console.log('Table 쪽 cardType================', cardType);

  const loadMoreData = async () => {
    // console.log('loadMoreData() 호출');
    // console.log('IsLasePage', IsLastPage);
    if (IsLastPage) {
      // console.log('마지막 페이지입니다.');
      return;
    }
    setLoading(true);
    // console.log('11111111111111111111111111111');
    // console.log('actionId', actionId);
    // console.log('currentPage', currentPage);

    // cardType에 따라 다른 api 호출
    let body = {};
    let apiUrl = '';
    if (tableType === 'TA') {
      body = {
        conditions: '',
      };
      apiUrl = `api/worker/data/${actionId}/${currentPage}`;
    } else if (tableType === 'QU') {
      body = {
        conditions: '',
        query: singleTableQuery,
        queryList: multipleCommitQuery,
      };
      apiUrl = `api/developer/data/${currentPage}`;
    }

    try {
      const response = await customAxios.post(apiUrl, body);
      // console.log('response.data.data', response.data.data);
      const newData = response.data.data.rowList;
      if (response.data.data.isLastPage) {
        setIsLastPage(true); // setIsLastPage를 사용하여 상태를 업데이트합니다.
      }
      setMoreRowList(prevRowList => [...prevRowList, ...newData]);
      setCurruntPage(currentPage => currentPage + 1);
      setRowCnt2(response.data.data.rowCnt);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // 데이터 로딩 완료
    }
  };

  // // console.log('currentPage================', currentPage);
  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const viewHeight = event.nativeEvent.layoutMeasurement.height;

    // 스크롤이 끝에 도달했을 때 데이터 로드
    if (offsetY + viewHeight >= contentHeight - 100) {
      loadMoreData();
    }
  };

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
    setConditionState(prevCondition => ({
      ...prevCondition,
      title: title,
    }));

    const cardId = parseInt(conditionId, 10);
    const card = await getCard(cardId, {});
    const dropdownList = card.dropdown;

    // 리코일에 조건변경 데이터 담기
    setDropdown(dropdownList);

    // 필요한 추가 작업을 수행합니다.
    setModalId('CF');
  };

  const tableHeader = makeHeader(title, rowCnt2, totalCnt2, isModalVisible);
  function makeHeader(
    title: String | undefined,
    rowCnt2: number | undefined,
    totalCnt2: number | undefined,
    isModalVisible: boolean,
  ) {
    const showCountInfo = isModalBoxVisible || !showButton;
    return (
      <S.Header>
        <S.HeaderContainer>
          {title && <S.Title>{title}</S.Title>}
          {showCountInfo &&
            rowCnt2 !== undefined &&
            totalCnt2 !== undefined && (
              <S.CountInfo>
                <S.CountText>
                  {rowCnt2}/{totalCnt2}
                </S.CountText>
              </S.CountInfo>
            )}
          {showButton && title && (
            <S.Button>
              <ConditionModify onPress={handlePress} query={query} />
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
                onScroll={handleScroll}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}>
                {moreRowList.map((row, rowIndex) => (
                  <TouchableOpacity
                    key={`row-${rowIndex}`}
                    onPressIn={() => handleTouchStart(rowIndex)}
                    onPressOut={handleTouchEnd}
                    style={[
                      {flexDirection: 'row'},
                      isTouched(rowIndex) && {
                        backgroundColor: 'rgba(251, 224, 84, 0.5)',
                      }, // 터치된 행에 배경색 적용
                    ]}
                    onPress={() => handleRowPress(rowIndex, row)}>
                    {row.map((cell, cellIndex) => (
                      <S.CellBox
                        key={`cell-${rowIndex}-${cellIndex}`}
                        style={{width: dynamicColumnWidths[cellIndex]}}>
                        <S.Cell
                          style={
                            isTouched(rowIndex) ? {color: '#182655'} : null
                          }>
                          {cell}
                        </S.Cell>
                      </S.CellBox>
                    ))}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </S.Body>
      </S.Table>
      {loading && (
        <>
          <Spinner size={30} type={'FadingCircleAlt'} color={'#182655'} />
        </>
      )}
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
            rowList: moreRowList,
            rowCnt: rowCnt2,
            totalCnt: totalCnt2,
            isLastPage: false,
          }}
          onPress={hideModal}
          cardType={tableType}
          isLoading={loading}
        />
      </Modal>
    </S.Container>
  );
};
export default Table;
