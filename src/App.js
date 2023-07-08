import { Route, Routes } from 'react-router-dom';
import './App.scss';
import React from 'react';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
         <Route path="/" element={<Layout/>}/>
      </Routes>
    </>
  );
}

export default App;
