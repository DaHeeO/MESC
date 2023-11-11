import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {customAxios, getBlock} from '../../../../Api';
import DataBox from './DataBox';
import Label from './Label';
import * as S from './DataComponent.styles';
import {set} from 'lodash';
import {useRecoilValue, useRecoilState} from 'recoil';
import {BlockResponseData} from '../../../states/BlockResponseState';
import {
  TableTitleState,
  SingleTableTitleState,
} from '../../../states/DataTitleState';
import {Card} from '../../../states/CardState';

// type Card = {
//   cardId: number;
//   cardName?: string;
//   content: string | null;
//   cardType: string;
//   labels?: LabelItem[];
//   table?: TableData;
//   button?: ButtonItem[];
// };

type LabelItem = {
  name: string;
  labelType: string;
  query: string;
};

type TableData = {
  // result?: string;
  columnNameList: string[];
  columnTypeList: string[];
  rowList: string[][];
};

type ButtonItem = {
  id: number;
  name: string;
  linkType: string;
  link: string;
  iconId?: any | null;
  response: string;
};

function DataComponent(props: {card: Card}) {
  const {card} = props;
  const [data1, setData1] = useState<TableData>();
  const [data2, setData2] = useState<String | TableData>();
  const [loading, setLoading] = useState(false);
  // const [labels, setLabels] = useState<LabelItem[]>([]);
  const [query, setQuery] = useState<string>();
  const [selectedLabel, setSelectedLabel] = useState<LabelItem>();
  const [dataTitle, setDataTitle] = useRecoilState(TableTitleState);
  const [singleTableTitle, setSingleTableTitle] = useRecoilState(
    SingleTableTitleState,
  );
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<String | TableData>();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFirstSectionPress = () => {
    setModalData(data1); // 첫 번째 섹션 데이터 설정
    setModalVisible(true);
  };

  const handleThirdSectionPress = () => {
    setModalData(data2); // 세 번째 섹션 데이터 설정
    setModalVisible(true);
  };

  // 카드 테이블이 존재하면(select문 성공 시)
  const tableData: TableData | null | undefined = card.table;

  // 'TA' labels 데이터 저장
  let LabelSection = makeLableSection(card.labels);

  // 'TA' labels의 labelType이 'q'인 것 선택된 상태로 저장
  const queryLabel = card.labels?.find(label => label.labelType === 'q');
  useEffect(() => {
    if (queryLabel && !selectedLabel) {
      setSelectedLabel(queryLabel);
    }
    setData2(queryLabel?.query); // query를 저장합니다.
    setQuery(queryLabel?.query);
  }, []);

  // 라벨을 선택하는 함수입니다.
  const handleSelectLabel = (labelItem: LabelItem) => {
    setSelectedLabel(labelItem);
    if (labelItem.labelType === 'q') {
      setData2(query); // query를 유지합니다.
    } else if (labelItem.labelType === 't') {
      fetchData(labelItem.query); // 테이블 데이터를 가져옵니다.
      setSingleTableTitle(labelItem.name);
    }
  };

  const fetchData = async (query: string) => {
    // console.log(
    //   '================================================================',
    // );
    // console.log('query', query);
    if (!query) return;

    try {
      // setLoading(true);
      const body = {
        query: query,
      };
      const response = await getBlock(9, body);
      const singleTableData = response.cardList.filter(
        (card: Card) => card.cardType === 'QU',
      );
      // console.log(
      //   'singleTableData================================================================',
      // );
      // console.log('singleTableData.table', singleTableData[0].table);
      setData2(singleTableData[0].table);
    } catch (error) {
      console.error('Fetching data failed: ', error);
    } finally {
      // setLoading(false); // 요청이 완료되면 로딩 상태를 해제합니다.
    }
  };

  function makeLableSection(labelItems: LabelItem[] | null | undefined) {
    if (!labelItems) return <></>;
    return (
      <S.DataSection>
        {/* 두 번째 섹션: Label을 렌더링합니다. */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <S.LabelContainer>
            {labelItems.map((labelItem, index) => (
              <Label
                key={index}
                isSelected={selectedLabel?.name === labelItem.name}
                onSelect={() => handleSelectLabel(labelItem)}
                label={labelItem}
                // Style might need to be added here to ensure label width is dynamic
              />
            ))}
          </S.LabelContainer>
        </ScrollView>
      </S.DataSection>
    );
  }

  return (
    <View>
      <S.DataContainer>
        <S.DataSection
        // height="45%"
        // style={{backgroundColor: 'red'}}
        >
          {/* 첫 번째 섹션: data1 렌더링 */}
          <DataBox
            table={tableData}
            title={dataTitle}
            onPress={() => handleFirstSectionPress}
          />
          {/* </TouchableOpacity> */}
        </S.DataSection>

        {LabelSection}

        <S.DataSection
        // height="45%"
        >
          {/* <TouchableOpacity onPress={handleThirdSectionPress}> */}
          {/* 세 번째 섹션: 선택된 라벨에 따라 DataBox를 렌더링합니다. */}
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View>
              {/* data2가 string 타입이 아니면 table prop으로 넘기고, string 타입이면 query prop으로 넘깁니다. */}
              {typeof data2 === 'string' ? (
                <DataBox
                  query={data2}
                  onPress={() => handleThirdSectionPress}
                />
              ) : (
                <DataBox
                  table={data2 as TableData}
                  title={singleTableTitle}
                  onPress={() => handleThirdSectionPress}
                />
              )}
            </View>
          )}
          {/* </TouchableOpacity> */}
        </S.DataSection>
      </S.DataContainer>
      {/* <Modal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        transparent={false}
        animationType="slide">
        {typeof modalData === 'string' ? (
          <DataBox query={modalData} />
        ) : (
          <DataBox table={modalData as TableData} title={singleTableTitle} />
        )}
      </Modal> */}
    </View>
  );
}

export default DataComponent;
