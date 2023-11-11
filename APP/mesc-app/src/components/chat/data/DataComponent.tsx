import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import customAxios from '../../../../Api';
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

type Card = {
  cardId: number;
  cardName?: string;
  content: string | null;
  cardType: string;
  labels?: LabelItem[];
  table?: TableData;
  button?: ButtonItem[];
};

type LabelItem = {
  name: string;
  labelType: string;
  query: string;
};

type TableData = {
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

const DataComponent = () => {
  const [block, setBlock] = useRecoilState(BlockResponseData);
  const [cards, setCards] = useState<Card[] | undefined>(undefined);
  const [data1, setData1] = useState<TableData>();
  const [data2, setData2] = useState<String | TableData>();
  const [loading, setLoading] = useState(false);
  const [labels, setLabels] = useState<LabelItem[]>([]);
  const [query, setQuery] = useState<string>();
  const [selectedLabel, setSelectedLabel] = useState<LabelItem>();
  const [dataTitle, setDataTitle] = useRecoilState(TableTitleState);
  const [singleTableTitle, setSingleTableTitle] = useRecoilState(
    SingleTableTitleState,
  );

  useEffect(() => {
    // block 상태에서 cards 데이터를 추출
    const cards = block.cardList;
    if (cards) {
      const data1 = cards.filter(card => card.cardType === 'TA');

      if (data1[0] && data1[0].table) {
        setData1(data1[0].table);
      }

      // 'TA' labels 데이터 저장
      const tableLabels = cards.find(card => card.cardType === 'TA')?.labels;
      if (tableLabels) {
        setLabels(tableLabels);
      }

      // 'TA' labels의 labelType이 'q'인 것 선택된 상태로 저장
      const queryLabel = cards
        .find(card => card.cardType === 'TA')
        ?.labels?.find(label => label.labelType === 'q');
      if (queryLabel && !selectedLabel) {
        setSelectedLabel(queryLabel);
        console.log('queryLabel', queryLabel);
      }

      // 'TA' labels의 labelType이 'q'인 것 query 데이터 저장
      const cardQuery = cards
        .find(card => card.cardType === 'TA')
        ?.labels?.find(label => label.labelType === 'q')?.query;
      if (cardQuery) {
        setQuery(cardQuery);
        setData2(cardQuery);
      }
    }
  }, [block]); // block이 변경될 때마다 실행

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
    if (!query) return;

    try {
      setLoading(true);
      const body = {
        query: query,
      };
      await customAxios
        .post(`developer/data/preview`, body)
        .then(response => {
          setData2(response.data.cardList[0].table); // 응답 데이터로 data2를 업데이트합니다.
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.error('Fetching data failed: ', error);
    } finally {
      setLoading(false); // 요청이 완료되면 로딩 상태를 해제합니다.
    }
  };

  return (
    <View>
      <S.DataContainer>
        <S.DataSection
          height="45%"
          // style={{backgroundColor: 'red'}}
        >
          {/* 첫 번째 섹션: data1 렌더링 */}
          <DataBox table={data1} title={dataTitle} />
        </S.DataSection>
        <S.DataSection>
          {/* 두 번째 섹션: Label을 렌더링합니다. */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <S.LabelContainer>
              {labels.map((labelItem, index) => (
                <Label
                  isSelected={selectedLabel?.name === labelItem.name}
                  onSelect={() => handleSelectLabel(labelItem)}
                  label={labelItem}
                  // Style might need to be added here to ensure label width is dynamic
                />
              ))}
            </S.LabelContainer>
          </ScrollView>
        </S.DataSection>
        <S.DataSection height="45%">
          {/* 세 번째 섹션: 선택된 라벨에 따라 DataBox를 렌더링합니다. */}
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View>
              {/* data2가 string 타입이 아니면 table prop으로 넘기고, string 타입이면 query prop으로 넘깁니다. */}
              {typeof data2 === 'string' ? (
                <DataBox query={data2} />
              ) : (
                <DataBox table={data2 as TableData} title={singleTableTitle} />
              )}
            </View>
          )}
        </S.DataSection>
      </S.DataContainer>
    </View>
  );
};

export default DataComponent;
