import React, { Component } from 'react';

interface ITryies {
  try: string,
  result: string,
}

class Try extends Component<{tryInfo: ITryies}> {
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
