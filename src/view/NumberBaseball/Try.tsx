import React, { memo } from 'react';

interface TryInfo {
  try: string,
  result: string,
}

// React.SFC 는 이제 지원안함
const Try: React.FunctionComponent<{tryInfo: TryInfo} > = memo(({tryInfo}) => {
  console.log(tryInfo);
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;
