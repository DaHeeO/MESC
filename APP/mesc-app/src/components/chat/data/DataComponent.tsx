import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {getBlock} from '../../../../Api';
import DataBox from './DataBox';
import Label from './Label';
import * as S from './DataComponent.styles';
import {useRecoilState} from 'recoil';
import {
  TableTitleState,
  SingleTableTitleState,
} from '../../../states/DataTitleState';
import {Card} from '../../../states/CardState';

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
  // const [labels, setLabels] = useState<LabelItem[]>([]);
  const [query, setQuery] = useState<string>();
  const [selectedLabel, setSelectedLabel] = useState<LabelItem>();
  const [dataTitle, setDataTitle] = useRecoilState(TableTitleState);
  const [singleTableTitle, setSingleTableTitle] = useRecoilState(
    SingleTableTitleState,
  );

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
        <S.DataSection style={{height: 230}}>
          {/* 첫 번째 섹션: data1 렌더링 */}
          <DataBox table={tableData} title={dataTitle} />
        </S.DataSection>

        {LabelSection}

        <S.DataSection style={{height: 230}}>
          {/* 세 번째 섹션: 선택된 라벨에 따라 DataBox 렌더링*/}
          {/* data2가 string 타입면 query prop, 아니면 table prop으로 */}
          {typeof data2 === 'string' ? (
            <DataBox query={data2} />
          ) : (
            <DataBox table={data2 as TableData} title={singleTableTitle} />
          )}
        </S.DataSection>
      </S.DataContainer>
    </View>
  );
}

export default DataComponent;
