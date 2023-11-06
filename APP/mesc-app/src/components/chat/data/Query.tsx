import React from 'react';
import {Text} from 'react-native';
import * as S from './Query.styles';

interface QueryProps {
  query: string;
}

const Query: React.FC<QueryProps> = ({query}) => {
  return <S.QueryBox>{query}</S.QueryBox>;
};

export default Query;
