import * as React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NumberBaseball from '../view/NumberBaseball/Hook'
import RSP from '../view/Rsp/Hooks';
import Lotto from '../view/Lotto/Hooks';
import { RouteChildrenProps } from 'react-router-dom';

class GameMatcher extends Component<RouteChildrenProps<{ name: string }>> {
  render() {
    if (!this.props.match) {
      return (
        <div>
          일치하는 게임이 없습니다.
        </div>
      );
    }
    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    console.log(urlSearchParams.get('page'));
    if (this.props.match.params.name === 'number-baseball') {
      return <NumberBaseball />
    } else if (this.props.match.params.name === 'rock-scissors-paper') {
      return <RSP />
    } else if (this.props.match.params.name === 'lotto-generator') {
      return <Lotto />
    } else {
      return (
        <div>
          일치하는 게임이 없습니다.
        </div>
      );
    }
  }
}

export default GameMatcher;