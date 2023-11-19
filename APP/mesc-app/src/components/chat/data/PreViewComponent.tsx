import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {getBlock} from '../../../../Api';
import DataBox from './DataBox';
import Label from './Label';
import * as S from './PreViewComponent.styles';
import {useRecoilState} from 'recoil';
import {SingleTableTitleState} from '../../../states/DataTitleState';
import {Card} from '../../../states/CardState';
import {ConditionIdState} from '../../../states/ConditionIdState';
import {cond} from 'lodash';
import ChatbotProfile from '../ChatbotProfileComponent';
import PreViewBox from './PreViewBox';

type TableData = {
  // result?: string;
  columnNameList: string[];
  columnTypeList: string[];
  rowList: string[][];
  totalCnt: number;
};

function PreViewComponent(props: {card: Card}) {
  const {card} = props;
  console.log('card', card);
  const [conditionId, setConditionId] = useRecoilState(ConditionIdState);

  return (
    <View>
      {card.table && (
        <DataBox
          title={card.title || ''}
          table={card.table}
          showButton={false}
          cardType="QR"
        />
      )}
      {/* <S.DataContainer>
        <S.DataSection style={{height: 230}}>
          <PreViewBox
            table={card.table}
            title={card.title || ''}
            showButton={false}
            totalCnt={card.table?.totalCnt}
          />
        </S.DataSection>
      </S.DataContainer> */}
    </View>
  );
}

export default PreViewComponent;
