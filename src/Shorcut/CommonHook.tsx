import React, { useState, useRef, useCallback } from "react"

export default function CommonHook() {
  
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

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
    </>
  )
}