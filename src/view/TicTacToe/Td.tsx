import React, { useCallback, memo, Dispatch, FC  } from 'react';
import { CLICK_CELL } from './TicTacToeHooks';

interface IProps {
  rowIndex: number,
  dispatch:Dispatch<any>,
  cellData: string,
  cellIndex: number,
}

const Td:FC<IProps> = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  console.log('td rendered');

  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
  }, [cellData]);

  return (
    <td onClick={onClickTd}>{cellData}</td>
  )
});

export default Td;
