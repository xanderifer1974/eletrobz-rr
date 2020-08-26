import React from 'react';
import './App.css'
import MainBanner from './components/MainBanner';
import PageDefault from './components/PageDefault';

function App() {
  return (
    <>
    <PageDefault>
      <MainBanner/>     
    </PageDefault>    
    </>
  );
}

export default App;
