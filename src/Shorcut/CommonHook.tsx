import React, { useState, useRef, useCallback } from "react"
import CommonProps from "./commonProps";

// 값뒤의 ! 는 값을 확신할때 사용 
// 값뒤의 ? 는 값을 확신할수 없을때 사용

// 값이 절대 바뀌지 않을때 사용하는 방법 
const rspCoords = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
} as const;

// # typeof
// rspCoords 가 변한다고 해도 이값은 rspCoords 을 따라가므로 밑의 방법을 많이쓴다
// type 은 변하지 않는값을 사용??
type imgCoords = typeof rspCoords[keyof typeof rspCoords];
// rspCoords 가 변하면 이값도 변해야 하므로 위의 방법이 더좋다
type imgCoords2 = "0" | "-142px" | "-284px";

export default function CommonHook() {
  
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  // function 같은거 설정할때 useRef ex: setTimeout() 같은거 넣을때
  const timeout = useRef<number | null>(null);
  // typescript 가 node의setTimeout인지 window의 setTimeout인지 헷갈리니까 명확히 적어준다 -> 안적음 에러
  timeout.current = window.setTimeout(() => {
  },2000); 

  // onChange Evnet
  const inputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  // onSubmit Event
  const formSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if(input) {
      input.focus();
    }
  }

  // useClassback 1
  const onSubmitForm = useCallback<(e: React.FormEvent) => void>((e) => {
    e.preventDefault();
    const input = inputEl.current;
    
  }, [value]);

  // useCallback 2
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }, []);

  // 랜더링 쪽에서 값을 받아오는 고차함수는 ()=> 을 적는걸 잊지말자
  const testOnClick = (testTxt:string) => {
    console.log(testTxt);
    return;
  }

  
  
  return (
    <>
    <h2>TS Coomon Hook short cut</h2>
    <form onSubmit={formSubmit}>
    <input type='number' value={value} onChange={inputChange} ref={inputEl}/>
    <input type='submit'/>
    </form>
    <p>{result}</p>
    <CommonProps text='asd' />
    {/* ()=> 없이 testOnClick('test') */}
    <button onClick={ ()=>testOnClick('test')}>btn</button>
    </>
  )
}