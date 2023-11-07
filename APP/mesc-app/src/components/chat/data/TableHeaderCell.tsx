import React from 'react';
import * as S from './Teble.styles';

type TableHeaderCellProps = {
  header: string;
  minWidth: number;
};

const TableHeaderCell: React.FC<TableHeaderCellProps> = React.memo(
  ({header, minWidth}) => {
    return <S.ColumnName style={{minWidth}}>{header}</S.ColumnName>;
  },
);

export default TableHeaderCell;
