import React, { useState, useRef, useCallback } from "react"
import CommonProps from "./commonProps";

// 값뒤의 ! 는 값을 확신할때 사용 
// 값뒤의 ? 는 값을 확신할수 없을때 사용

export default function CommonHook() {
  
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  // function 같은거 설정할때 useRef ex: setTimeout() 같은거 넣을때
  const timeout = useRef<number | null>(null);
  // typescript 가 node의setTimeout인지 window의 setTimeout인지 헷갈리니까 명확히 적어준다
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

  
  
  return (
    <>
    <h2>TS Coomon Hook short cut</h2>
    <form onSubmit={formSubmit}>
    <input type='number' value={value} onChange={inputChange} ref={inputEl}/>
    <input type='submit'/>
    </form>
    <p>{result}</p>
    <CommonProps text='asd' />
    </>
  )
}