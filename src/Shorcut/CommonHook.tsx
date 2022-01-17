import React, { useState, useRef, useCallback, FC } from "react"
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
// type 과 interface가 다른점은 type은 확장(extends)를 할수 없는 점이다
// value 만 가져오고싶을때
type imgCoords = typeof rspCoords[keyof typeof rspCoords];
// key 만 가져오고싶을떄
type imgCoords3 = keyof typeof rspCoords;
// rspCoords 가 변하면 이값도 변해야 하므로 위의 방법이 더좋다
type imgCoords2 = "0" | "-142px" | "-284px";

// 객체키가 있는지 확인, return값을 지정안해줘도 오류가나지 않는 이유는 매개변수에서 이미 값을 할당해 줬기 때문이다.
function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];  
}
let testObj = { a: 1, b: 2, c: 3 };

getProperty(testObj, "a"); // okay
//getProperty(testObj, "z"); // error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.

let obj = { a: 1, b: 2, c: 3 };

export default function CommonHook() {
  
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  // functiond 같은거 값을 설정할때 useRef ex: window.setTimeout() 같은거 넣을때
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

  // onClick 설정하고 싶을떄  => 버튼말고, 다른 태그에 사용 하고 싶을때 
  const onClickRedo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    
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
    {/* ()=> 없이 testOnClick('test') */}
    <button onClick={ ()=>testOnClick('test')}>btn</button>
    </>
  )
}

const Test = () => {

}