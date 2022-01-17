import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/layout/header/Header';
import { Me } from './components/sections/about/Me';
import { Footer } from './components/sections/footer/Footer';
import { Portada } from './components/sections/portada/Portada';
import { Tecnologies } from './components/sections/tecnologies/Tecnologies';
import { Templates } from './components/sections/templates/Templates';
import { Websites } from './components/sections/websites/Websites';
import { PerfilCard } from './components/ui/Cards/perfil/PerfilCard';


function App() {
  return (
    <Router >
      <Header />
      <div className="app">
        <Portada />
        <Templates />
        <Tecnologies />
        <Websites />
        <Me />
        <Footer />
        <PerfilCard />

      </div>
    </Router>
  );
}

export default App;
