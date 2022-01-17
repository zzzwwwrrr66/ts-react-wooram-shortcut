import React, {useReducer, Dispatch} from "react";
import CommonReducerChild from './CommonReducerChild'
interface IState {
  winner: 'O' | 'X' | '',
  turn: 'O' | 'X',
  tableData: string[][],
  recentCell: [number, number]
}

// 
interface ITableContext {
  tableData: number[][],
  halted: boolean,
  dispatch: Dispatch<any>,
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

// action 들의 묶음 하나씩 return 값이 필요한 관계로 => type은 본으로 설정해주고 action 을 값으로 사용하는 것만 타입 설정해준다.
function ReducerSet() {
  const [state, dispatch] = useReducer<React.Reducer<IState, ActionGroup>>(reducer, initialState);
  
  const onClick = () => {
    return undefined;
  }

  return(
    <>
    <CommonReducerChild tableData={state.tableData} dispatch={dispatch} onClick={onClick}/>
</>
  )
}
export default ReducerSet;