import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { useObserverHook } from '@/hooks';

let observer;
export default function () {
  const [state, setState] = useState();

  useObserverHook('#loading', (entries: any) => {
    console.log(entries);
  });

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      observer
      <button onClick={handleClick}>首页</button>
      <div
        id="loading"
        style={{
          width: '100px',
          height: '100px',
          background: '#f60',
          marginTop: '1000px',
        }}
      >
        loading
      </div>
    </div>
  );
}
