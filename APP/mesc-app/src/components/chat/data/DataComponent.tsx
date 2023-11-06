import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import DataBox from './DataBox';
import * as S from './DataComponent.styles';

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
            ['대공정 A', '소공정A', '공정A', '20231105', '15'],
            ['대공정 A', '소공정A', '공정B', '20231028', '8'],
            ['대공정 B', '소공정C', '공정D', '20230601', '0'],
            ['대공정 C', '소공정F', '공정G', '20220805', '1'],
            ['대공정 A', '소공정A', '공정A', '20231105', '15'],
            ['대공정 A', '소공정A', '공정B', '20231028', '8'],
            ['대공정 B', '소공정C', '공정D', '20230601', '0'],
            ['대공정 C', '소공정F', '공정G', '20220805', '1'],
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
          'select * from WO_INFO join PROD_INFO on WO_INFO.PROD_ID=PROD_INFO.PROD_ID where WO_INFO.PROD_ID=1',
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
        cardId: 3,
        cardType: 'ML',
        content: null,
        checkbox: [
          {
            id: 1,
            name: '1번',
          },
        ],
      },
      {
        cardId: 4,
        cardType: 'MC',
        content: null,
        button: [
          {
            id: 5,
            name: '1번',
            sequence: 1,
            type: null,
            linkType: 'B',
            link: '2',
            icon: null,
          },
        ],
        dropdown: [
          {
            id: 2,
            name: '2번',
            columnName: 'c_ad',
            type: 'No',
          },
          {
            id: 3,
            name: '3번',
            columnName: 'c_',
            type: 'No',
          },
        ],
      },
    ],
  },
};

// API 응답에 대한 타입을 정의합니다.
type CardType = {
  cardId: number;
  cardType: string;
  content: any;
  table?: {
    columnNameList: string[];
    columnTypeList: string[];
    rowList: any[][];
  };
  query?: string;
};

type ApiResponse = {
  statusCode: number;
  message: string;
  data: {
    blockId: number;
    cardList: CardType[];
  };
};

const DataComponent = () => {
  //   const [cards, setCards] = useState<CardType[]>([]);
  const [cards, setCards] = useState(dummyData.data.cardList);

  //   useEffect(() => {
  //     // 데이터를 가져오는 함수
  //     const fetchData = async () => {
  //       try {
  //         // API 요청
  //         const response = await axios.get<ApiResponse>('/api/data');
  //         if (
  //           response.data &&
  //           response.data.data &&
  //           response.data.data.cardList
  //         ) {
  //           setCards(response.data.data.cardList);
  //         }
  //       } catch (error) {
  //         console.error('There was an error fetching the data', error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <View>
      <S.DataContainer>
        {cards.map(card => {
          switch (card.cardType) {
            case 'TA':
              if (card.table) {
                // TA 타입의 카드일 때 table 데이터를 DataBox에 전달합니다.
                return <DataBox key={card.cardId} table={card.table} />;
              }
              break;
            case 'QU':
              if (card.query) {
                // QU 타입의 카드일 때 query 데이터를 DataBox에 전달합니다.
                return <DataBox key={card.cardId} query={card.query} />;
              }
              break;
            // 여기에 다른 cardType에 대한 처리를 추가할 수 있습니다.
            default:
              return null;
          }
        })}
      </S.DataContainer>
    </View>
  );
};

export default DataComponent;
