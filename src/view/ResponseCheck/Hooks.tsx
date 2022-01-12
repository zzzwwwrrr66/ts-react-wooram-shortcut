import React, { useState, useRef, useCallback, useMemo } from 'react';
import './style.css';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('CLICK TO START');
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = window.setTimeout(() => {
        setState('now');
        setMessage('CLICK NOW!!!');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('CLICK TO GREEN');
    } else if (state === 'ready') { // 성급하게 클릭 
      if(timeout.current) {
        clearTimeout(timeout.current);
      }
      setState('waiting');
      setMessage('TOO SOON!! CLICK AFTER GREEN');
    } else if (state === 'now') { // 반응속도 체크
      if(endTime.current) {
        endTime.current = new Date().getTime();
      }
      setState('waiting');
      setMessage('CLICK TO START');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);
  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0
      ? null
      : <>
        <div>time average: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
