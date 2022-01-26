import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Gugudan from './view/Gugudan/Gugudan';
import GugudanClass from './view/Gugudan/GugudanClass';
import WordRelayClass from './view/WordRelay/Class';
import WordRelayHook from './view/WordRelay/Hook';
import NumberBaseballHooks from './view/NumberBaseball/Hook';
import NumberBaseballClass from './view/NumberBaseball/Class';
import ResponseCheck from './view/ResponseCheck/Hooks';
import LottoHooks from './view/Lotto/Hooks';
import TicTacToe from './view/TicTacToe/TicTacToeHooks';

function App() {
  return (
    <>
      <h1>wooram ts</h1>
      
      <Router>
        <nav>
          <Link 
          to={{
            pathname: 'gugudan/123',
            state: {
              test: 'test'
            }
          }}
          >gugudan</Link>
        </nav>
        <Switch>
          <Route path='/gugudan/:id' component={Gugudan}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
