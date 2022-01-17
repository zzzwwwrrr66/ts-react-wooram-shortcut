import React, { memo,FC,Dispatch } from 'react';
import Td from './Td';

interface IProps {
  rowData: string[],
  rowIndex: number,
  dispatch:Dispatch<any>,
}

const Tr:FC<IProps> = memo(({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered');
  return (
    <tr>
      {Array(rowData.length).fill(null).map((td, i) => (
        <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>
      ))}
    </tr>
  );
});

export default Tr;
