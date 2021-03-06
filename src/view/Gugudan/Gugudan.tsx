
import React, { useState, useRef, useEffect,FC } from "react";
import { useParams, useLocation, useHistory, useRouteMatch } from "react-router";
import { RouteComponentProps } from "react-router";


export default function Gugudan() {

  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  const params = useParams();
  const location = useLocation();
  const History = useHistory();
  const routeMatch = useRouteMatch();
  useEffect(()=>{
    console.log(params, location, History, routeMatch);
    
  },[])

  const inputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const formSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    console.log(`value ${value}`);
    if(first*second === Number(value)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setResult('currect!!!');
      if(input) {
        input.focus();
      }
    } else {
      setValue('');
      if(input) {
        input.focus();
      }
      setResult('false!!!!');
    }
    
  }
  
  return (
    <>
    <h2>Gugudan</h2>
    <p>{first} * {second} = ??</p>
    <form onSubmit={formSubmit}>
    <input type='number' value={value} onChange={inputChange} ref={inputEl}/>
    <input type='submit'/>
    </form>
    <p>{result}</p>
    </>
  )
}