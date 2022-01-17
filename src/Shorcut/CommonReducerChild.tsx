import React,{FC,Dispatch} from 'react';

interface IProps {
  tableData: string[][];
  dispatch: Dispatch<any>,
  onClick: () => void,
}

const Table:FC<IProps> = ({ tableData, dispatch }) => {
  return (
    <table>
      <tbody>
      </tbody>
    </table>
  );
};

export default Table;
