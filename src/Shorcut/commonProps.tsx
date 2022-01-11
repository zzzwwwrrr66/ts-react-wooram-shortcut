import { memo } from "react";

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

// const 화살표함수 선언일때
// React.SFC 는 이제 지원안함
// const Try: React.FunctionComponent<{tryInfo: TryInfo} > = memo(({tryInfo}) => {
//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div>{tryInfo.result}</div>
//     </li>
//   );
// });

// export default Try;
