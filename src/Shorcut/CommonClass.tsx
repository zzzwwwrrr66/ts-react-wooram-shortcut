import React, { createRef } from "react";
function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = candidate;
  
  return array;
}

interface IState {
  test?: string,
  first: number,
  second: number,
  value: string,
  result: string,
  functionReturnNumberArray: number[], // 함수를 설정하더라도 return 값을 타입으로 해주면 가능
}

class CommonClass extends React.Component<{}, IState> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
    functionReturnNumberArray: getNumbers(),
  };

  // onSubmit Event
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(this.state.value) === this.state.first * this.state.second) {
      if (this.input) {
        this.input.focus();
      }
    }
  };

  // onChange Event
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  // useRef 1
  input: HTMLInputElement | null = null;
  onRefInput = (c: HTMLInputElement) => { this.input = c; };

  // useRef 2
  onElInput = createRef<HTMLInputElement>();

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button type="submit">입력</button>
        </form>
      </>
    );
  }
}

export default CommonClass