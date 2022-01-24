import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/layout/header/Header';
import { ModalWindow } from './components/ui/ModalWindow';
import { Router } from './router/Router';


function App() {
  const message = useSelector(state => state.message);
  
  return (
    <BrowserRouter >
      {
        (message && message.msg) && <ModalWindow />
      }
      <Header />
      <div className="app">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
