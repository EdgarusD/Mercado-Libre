import React from 'react';
import * as M from '@mantine/core'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <M.Box>
      <Header />
      <Outlet />
    </M.Box>
  );
}

export default App;
