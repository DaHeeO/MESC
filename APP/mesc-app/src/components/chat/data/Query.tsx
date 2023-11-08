import React from 'react';
import {ScrollView} from 'react-native';
import * as S from './Query.styles';

interface QueryProps {
  query: string;
}

const Query: React.FC<QueryProps> = ({query}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <S.QueryBox>
          <S.Query>{query}</S.Query>
        </S.QueryBox>
      </ScrollView>
    </ScrollView>
  );
};

export default Query;
