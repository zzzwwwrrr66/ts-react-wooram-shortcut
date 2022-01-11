import React from 'react';

import Gugudan from './view/Gugudan';
import GugudanClass from './view/GugudanClass';
import WordRelayClass from './view/WordRelay/Class';
import WordRelayHook from './view/WordRelay/Hook';
function App() {
  return (
    <>
      <h1>wooram ts</h1>
      <Gugudan />
      <GugudanClass />
      <h2>WordRelay</h2>
      <h3>WordRelay hook</h3>
      <WordRelayHook />
      <h3>WordRelay class</h3>
      <WordRelayClass />
    </>
  );
}

export default App;
