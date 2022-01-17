import { memo, FC } from "react"; 

interface IProps {
  text: string
}
// function 선언일때
export default function CommonProps({text}: IProps) {
  return(
    <>
    <h1>child {text}</h1>
    </>
  )
}

// const 화살표함수 선언일때, FC나 React.FunctionComponent 사용; FC === React.FunctionComponent
// React.SFC 는 이제 지원안함
// const Try2: React.FunctionComponent<{tryInfo: TryInfo} > = memo(({tryInfo}) => {
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div>{tryInfo.result}</div>
//     </li>
//   );
// });

const CommonProps2:FC<{text: string}> = ({text}) => {
  return(
    <>
    <h1>child {text}</h1>
    </>
  )
}

// export default Try;
