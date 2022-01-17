import React, { useEffect, useReducer, useCallback } from 'react';
import Table from './Table';
import './style.css'
interface IState {
  winner: 'O' | 'X' | '',
  turn: 'O' | 'X',
  tableData: string[][],
  recentCell: [number, number]
}

const initialState:IState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = 'SET_WINNER' as const;
export const CLICK_CELL = 'CLICK_CELL' as const;
export const CHANGE_TURN = 'CHANGE_TURN' as const;
export const RESET_GAME = 'RESET_GAME' as const;


interface ISetWinner {
  type: typeof SET_WINNER,
  winner: 'O' | 'X' | '',
}
interface IClickCell {
  type: typeof CLICK_CELL,
  row: number,
  cell: number
}
interface IChangeTurn {
  type: typeof CHANGE_TURN,
}
interface IResetGame {
  type: typeof RESET_GAME,
}

type ActionGroup = ISetWinner | IClickCell | IChangeTurn | IResetGame


// action 들의 묶음 하나씩 return 값이 필요한 관계로 => type은 본으로 설정해주고 action 을 값으로 사용하는 것만 타입 설정해준다.
const reducer = (state: IState, action: ActionGroup): IState => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,
        winner: action.winner,
      };
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer라는 라이브러리로 가독성 해결
      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O',
      };
    }
    case RESET_GAME: {
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1],
      };
    }
    default:
      return state;
  }
};



const TicTacToe = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, ActionGroup>>(reducer, initialState);
  const { tableData, turn, winner, recentCell }:IState = state;
  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('O');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: 'O' });
  }, []);

  const onClickReset = () => {
    dispatch({ type: RESET_GAME });
    dispatch({ type: SET_WINNER, winner: '' });
  }

  useEffect(() => {
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }
    let win = false;
    if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
      win = true;
    }
    if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn) {
      win = true;
    }
    if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
      win = true;
    }
    if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn) {
      win = true;
    }
    console.log(win, row, cell, tableData, turn);
    if (win) { // 승리시
      dispatch({ type: SET_WINNER, winner: turn });
      dispatch({ type: RESET_GAME });
    } else {
      let all = true; // all이 true면 무승부라는 뜻
      tableData.forEach((row) => { // 무승부 검사
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        dispatch({ type: SET_WINNER, winner: '' });
        dispatch({ type: RESET_GAME });
      } else {
        dispatch({ type: CHANGE_TURN });
        
      }
    }
  }, [recentCell]);

  return (
    <>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
      <div>{winner}님의 승리</div>
      <button onClick={onClickReset}>Reset game</button>
    </>
  )
};

export default TicTacToe;
