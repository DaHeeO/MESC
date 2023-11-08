import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import axios from 'axios';
import DataBox from './DataBox';
import Label from './Label';
import * as S from './DataComponent.styles';
import {set} from 'lodash';

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

const dummyData = {
  statusCode: 200,
  message: 'Success',
  data: {
    blockId: 4,
    isPossible: false,
    cardList: [
      {
        cardId: 5,
        cardType: 'TX',
        cardName: '공정조희텍스트',
        content:
          '다음은 전체 공정 조회 [조회], [쿼리문] 결과입니다.\\n추가적으로 메뉴탭에서 [테이블]을 선택하면\\n해당 테이블의 데이터를 확인할 수 있습니다. ',
      },
      {
        cardId: 6,
        cardType: 'TA',
        cardName: '공정테이블',
        content: null,
        labels: [
          {
            name: '쿼리',
            labelType: 'q',
            query:
              'select * from WO_INFO join PROD_INFO on WO_INFO.PROD_ID=PROD_INFO.PROD_ID where WO_INFO.PROD_ID=1',
          },
          {
            name: 'prod_info',
            labelType: 't',
            query: 'SELECT * FROM prod_info',
          },
        ],
        table: {
          columnNameList: [
            'WO_ID',
            'PROD_ID',
            'LINE_ID',
            'WORK_ID',
            'FCT_ID',
            'SHOP_ID',
            'WO_STS',
            'WO_YMD',
            'MFG_TYPE',
            'STATUS',
            'PROD_ID',
            'PROD_NAME',
          ],
          columnTypeList: [
            'INT',
            'INT',
            'INT',
            'INT',
            'INT',
            'INT',
            'CHAR(4)',
            'DATETIME',
            'VARCHAR',
            'VARCHAR',
            'INT',
            'VARCHAR',
          ],
          rowList: [
            [
              '1dfdfdf',
              '1ddd',
              '1ddd',
              '1dddd',
              '1dddd',
              '1ddd',
              '1ddd',
              '2011-01-01T00:00',
              '1',
              '1',
              '1',
              '1번',
            ],
            [
              '1dfdfdf',
              '1ddd',
              '1ddd',
              '1dddd',
              '1dddd',
              '1ddd',
              '1ddd',
              '2011-01-01T00:00',
              '1',
              '1',
              '1',
              '1번',
            ],
            [
              '1dfdfdf',
              '1ddd',
              '1ddd',
              '1dddd',
              '1dddd',
              '1ddd',
              '1ddd',
              '2011-01-01T00:00',
              '1',
              '1',
              '1',
              '1번',
            ],
          ],
        },
        button: [
          {
            id: 21,
            name: '조건 변경',
            linkType: 'C',
            link: '22',
            iconId: null,
            response: '조건 변경',
          },
        ],
      },
    ],
    dcbList: [],
  },
};

const DataComponent = () => {
  const [cards, setCards] = useState<Card[] | undefined>(undefined);
  const [data1, setData1] = useState<TableData>();
  const [data2, setData2] = useState<String | TableData>();
  const [loading, setLoading] = useState(false);
  const [labels, setLabels] = useState<LabelItem[]>([]);
  const [query, setQuery] = useState<string>();
  const [selectedLabel, setSelectedLabel] = useState<LabelItem>();
  // useEffect(() => {

  //   // 함수를 비동기로 선언합니다.
  //   const fetchCards = async () => {
  //     const token =
  //       'deyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvaEBuYXZlci5jb20iLCJBdXRoIjoiREVWRUxPUEVSIiwidXNlcklkIjo0LCJleHAiOjE2OTk1MDg0NTF9.mhX8E7UiKhJ9nImGMmTpiKYGyt5nXz4_vqB7mKQwvXI'; // 여기에 실제 토큰 값을 넣어주세요.

  //     try {
  //       // POST 요청을 보냅니다.
  //       const response = await axios.post(
  //         'https://www.mesc.kr/api/mesc/block/6', // 요청할 URL
  //         {actionId: 23}, // 요청 바디
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`, // 헤더에 토큰을 포함시킵니다.
  //           },
  //         },
  //       );

  //       // 응답에서 data를 추출하여 cards 상태를 설정합니다.
  //       setCards(response.data);
  //     } catch (error) {
  //       // 오류가 발생한 경우 콘솔에 로그를 남깁니다.
  //       console.error('There was an error!', error);
  //     }
  //   };

  //   // 정의한 함수를 호출합니다.
  //   fetchCards();
  // }, []);

  // 'TA' table 데이터 저장하기 위해

  // 'TA' label 데이터 저장하기 위해

  // 'TA' label의 q타입 query 데이터 저장하기 위해

  useEffect(() => {
    setCards(dummyData.data.cardList);
  }, []);

  useEffect(() => {
    if (cards) {
      // 'TA' table 데이터 저장
      const data1 = cards.filter(card => card.cardType === 'TA');
      setData1(data1[0].table);

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
  }, [cards]);

  // 라벨을 선택하는 함수입니다.
  const handleSelectLabel = (labelItem: LabelItem) => {
    setSelectedLabel(labelItem);
    if (labelItem.labelType === 'q') {
      setData2(query); // query를 유지합니다.
    } else if (labelItem.labelType === 't') {
      fetchData(labelItem.query); // 테이블 데이터를 가져옵니다.
    }
  };

  const fetchData = async (query: string) => {
    if (!query) return;

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
              cardType: 'STA',
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

      // const response = await axios.get(`YOUR_API_ENDPOINT/${query}`); // 라벨 이름을 이용해 요청을 보내세요.
      setData2(response.data.cardList[0].table); // 응답 데이터로 data2를 업데이트합니다.
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
          <DataBox table={data1} />
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
                <DataBox table={data2 as TableData} />
              )}
            </View>
          )}
        </S.DataSection>
      </S.DataContainer>
    </View>
  );
};

export default DataComponent;
