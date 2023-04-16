import React from 'react';
import * as M from '@mantine/core'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <M.Box>
      <Outlet />
    </M.Box>
  );
}

export default App;
