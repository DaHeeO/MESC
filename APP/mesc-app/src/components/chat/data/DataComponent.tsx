import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';
import DataBox from './DataBox';
import Label from './Label';
import * as S from './DataComponent.styles';

type Card = {
  cardId: number;
  cardType: string;
  table?: any;
  query?: string;
  tableQuery?: string;
  label?: LabelItem[];
};

type LabelItem = {
  id: number;
  name: string;
  labelType: string;
  sequence: number;
};

const dummyData = {
  statusCode: 200,
  message: 'Success',
  data: {
    blockId: 1,
    cardList: [
      {
        cardId: 1,
        cardType: 'TA',
        content: null,
        table: {
          columnNameList: [
            '공정대분류',
            '공정분류',
            '공정명',
            '시작 일시',
            '제품 갯수',
          ],
          columnTypeList: [
            'varchar(15)',
            'varchar(15)',
            'varchar(15)',
            'date',
            'int',
          ],
          rowList: [
            ['대공정 A', '소fdfdf공', '공정A', '20dfdfdfd0', '15'],
            ['대공정 A', '소공정A', '공정B', '20231028', '8'],
            ['대공정 B', '소공정Caaa', '공정D', '20230601', '0'],
            ['대공정 C', '소공정F', '공정G', '20220805', '1'],
            ['대공정 A', '소공정A', '공정A', '20231105', '15'],
            ['대공정 A', '소공정Adddd', '공정B', '20231028', '8'],
            ['대공정 B', '소공정C', '공정D', '20230601', '0'],
          ],
        },
        checkbox: [
          {
            id: 2,
            name: '2번',
          },
        ],
      },
      {
        cardId: 2,
        cardType: 'QU',
        content: null,
        query:
          'SELECT \nS_ACCTBAL, \nS_NAddddddddddddddddddddddddddddME, \nN_NAME, \n P_PARTKEY,\nP_MFGR,\nS_ADDRESS,\nS_PHONE,\nS_COMMENT\nFROM\nPART,\nSUPPLdddddddddddddddddddddIER,\nWHERE\nP_PARTKEY = PS_PARTKEY\nAND S_SUPPKEY = PS_SUPPKEY\nAND P_SIZE = 15\nSdddddddddddddddELECT\nWHERE\nORDER BY\nS_ACCTBAL DESC,\nN_ddddddddddddddddddddddNAME,\nS_NAME',
        dropdown: [
          {
            id: 1,
            name: '1번',
            columnName: 'column',
            type: 'No',
          },
        ],
      },
      {
        cardId: 5,
        cardType: 'LA',
        content: null,
        label: [
          {
            id: 1,
            name: '쿼리',
            sequence: 1,
            labelType: 'q',
          },
          {
            id: 2,
            name: 'TABLE 1',
            sequence: 2,
            labelType: 't',
          },
          {
            id: 3,
            name: 'TABLE 2',
            sequence: 3,
            labelType: 't',
          },
          {
            id: 4,
            name: 'TABLE 3',
            sequence: 4,
            labelType: 't',
          },
          {
            id: 5,
            name: '쿼리',
            sequence: 5,
            labelType: 'q',
          },
          {
            id: 6,
            name: 'TABLE 4',
            sequence: 6,
            labelType: 't',
          },
          {
            id: 7,
            name: 'TABLE 5555555555',
            sequence: 7,
            labelType: 't',
          },
          {
            id: 8,
            name: 'TABLE 6',
            sequence: 4,
            labelType: 't',
          },
        ],
      },
      {
        cardId: 6,
        cardType: 'STA',
        tableQuery: 'SELECT * FROM table1',
      },
      {
        cardId: 7,
        cardType: 'STA',
        tableQuery: 'SELECT * FROM table2',
      },
      {
        cardId: 8,
        cardType: 'STA',
        tableQuery: 'SELECT * FROM table3',
      },
      {
        cardId: 9,
        cardType: 'STA',
        tableQuery: 'SELECT * FROM table4',
      },
    ],
  },
};

const DataComponent = () => {
  const [cards, setCards] = useState<Card[]>(dummyData.data.cardList);
  const [selectedLabel, setSelectedLabel] = useState<LabelItem | null>(null);
  const [data2, setData2] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);

  // 'TA' 타입 카드들만 필터링하여 data1에 할당
  const data1 = cards.filter(
    card => card.cardType === 'TA' || card.cardType === 'QU',
  );

  // 'QU' 타입 카드의 쿼리 데이터만 가져와 query 변수에 할당
  // const query = cards.find(card => card.cardType === 'QU')?.query;

  // 'STA' 타입 카드들만 필터링하여 data2에 할당
  // setData2(cards.filter(card => card.cardType === 'STA'));

  useEffect(() => {
    setData2(cards.filter(card => card.cardType === 'QU'));
  }, [cards]);

  useEffect(() => {
    // 'LA' 타입의 카드 중, labelType이 'q'인 첫 번째 라벨을 찾습니다.
    const firstLabel = cards
      .find(
        card =>
          card.cardType === 'LA' &&
          card.label?.some(label => label.labelType === 'q'),
      )
      ?.label?.find(label => label.labelType === 'q');

    if (firstLabel) {
      setSelectedLabel(firstLabel); // 첫 번째 'q' 타입 라벨 객체로 초기 상태를 설정합니다.
    }
  }, [cards]);

  // 라벨을 선택하는 함수입니다.
  const handleSelectLabel = (labelItem: LabelItem) => {
    setSelectedLabel(labelItem);
    if (labelItem.labelType === 'q') {
      setData2(data1.filter(card => card.cardType === 'QU'));
    } else {
      fetchData(labelItem.name);
    }
  };

  const fetchData = async (labelName: string) => {
    if (!labelName) return;

    try {
      setLoading(true);

      const response = {
        statusCode: 200,
        message: 'Success',
        data: {
          blockId: 1,
          cardList: [
            {
              cardId: 1,
              cardType: 'TA',
              content: null,
              table: {
                columnNameList: [
                  'test',
                  '잘 되나',
                  '제발 되라',
                  '갯수',
                  'ddddd',
                ],
                columnTypeList: [
                  'varchar(15)',
                  'varchar(15)',
                  'varchar(15)',
                  'int',
                  'varchar(15)',
                ],
                rowList: [
                  [
                    'ㄴㅇㄹㄴ A',
                    'ㅇㄹㄴㅇㄹ',
                    'ㅇㄹㅇㄹ',
                    'ㄴㅇㄹㅇㄹ',
                    'dfdf',
                  ],
                  ['ㅇㄹㅇㅇ A', '소공ㄴㄴ정A', '공정ㄴㄴB', 'ㅇㄹㅇ', 'sdfs'],
                  ['대공정 C', '소공정F', '공정G', '20220805', 'sdfds'],
                  ['대공정 A', '소공정A', '공정A', '20231105', 'sdfdfdf'],
                  ['대공정 A', '소공정Adddd', '공정B', '20231028', 'sdfsdf'],
                  ['대공정 B', '소공정C', '공정D', '20230601', 'sdfsdfsdf'],
                ],
              },
              checkbox: [
                {
                  id: 2,
                  name: '2번',
                },
              ],
            },
          ],
        },
      };

      // const response = await axios.get(`YOUR_API_ENDPOINT/${labelName}`); // 라벨 이름을 이용해 요청을 보내세요.
      setData2(response.data.cardList); // 응답 데이터로 data2를 업데이트합니다.
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
          {/* 첫 번째 섹션: 'TA' 타입의 DataBox를 렌더링합니다. */}

          {cards
            .filter(card => card.cardType === 'TA')
            .map(card => (
              <DataBox key={card.cardId} table={card.table} />
            ))}
        </S.DataSection>
        <S.DataSection>
          {/* 두 번째 섹션: Label을 렌더링합니다. */}
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <S.LabelContainer>
              {cards
                .filter(card => card.cardType === 'LA')
                .flatMap(card => card.label || [])
                .map(labelItem => (
                  <Label
                    key={labelItem.id}
                    label={labelItem}
                    isSelected={selectedLabel?.id === labelItem.id}
                    onSelect={() => handleSelectLabel(labelItem)}
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
            <View
            // style={{backgroundColor: 'yellow'}}
            >
              {data2.map(card => (
                <DataBox
                  key={card.cardId}
                  {...(card.query ? {query: card.query} : {table: card.table})}
                />
              ))}
            </View>
          )}
        </S.DataSection>
      </S.DataContainer>
    </View>
  );
};

export default DataComponent;
