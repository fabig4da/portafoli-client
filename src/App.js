import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/layout/header/Header';
import { Router } from './router/Router';


function App() {
  React.useEffect(() => {
    // templateRepository.findAll()
    // .then(console.log)
    // .catch(console.log)
  }, [])
  return (
    <BrowserRouter >
      <Header />
      <div className="app">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
