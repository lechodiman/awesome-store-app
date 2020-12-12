import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
