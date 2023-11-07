import React from 'react';
import * as S from './Teble.styles';

type TableTypeCellProps = {
  type: string;
  minWidth: number;
};

const TableTypeCell: React.FC<TableTypeCellProps> = React.memo(
  ({type, minWidth}) => {
    return <S.ColumnType style={{minWidth}}>{type}</S.ColumnType>;
  },
);

export default TableTypeCell;
