import React from 'react';
import logo from './logo.svg';
import './App.css';
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
