import * as React from 'react';
import NumberBaseball from '../view/NumberBaseball/Hook'
import RSP from '../view/Rsp/Hooks';
import Lotto from '../view/Lotto/Hooks';
import { useRouteMatch, useLocation, useHistory } from 'react-router';

const GameMatcher = () => {
  const match = useRouteMatch<{ name: string }>();
  const location = useLocation();
  const history = useHistory();
  if (!match) {
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  console.log(urlSearchParams.get('page'));
  if (match.params.name === 'number-baseball') {
    return <NumberBaseball />
  } else if (match.params.name === 'rock-scissors-paper') {
    return <RSP />
  } else if (match.params.name === 'lotto-generator') {
    return <Lotto />
  } else {
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
}

export default GameMatcher;