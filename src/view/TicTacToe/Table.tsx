import React,{FC,Dispatch} from 'react';
import Tr from './Tr';

interface IProps {
  tableData: string[][];
  dispatch: Dispatch<any>,
  onClick: () => void,
}

const Table:FC<IProps> = ({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill(null).map((tr, i) => (
          <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
