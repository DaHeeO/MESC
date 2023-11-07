import React from 'react';
import * as S from './Teble.styles';

type TableCellProps = {
  content: any; // 여기서 any 대신 더 구체적인 타입을 사용할 수 있습니다.
  minWidth: number;
};

const TableCell: React.FC<TableCellProps> = React.memo(
  ({content, minWidth}) => {
    return <S.Cell style={{minWidth}}>{content}</S.Cell>;
  },
);

export default TableCell;
