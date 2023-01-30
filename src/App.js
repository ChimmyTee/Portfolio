import React from 'react';
// components
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Header from './components/Header';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <div class='bg-neutral-200'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div class='bg-neutral-200 h-screen'></div>
    </div>
  );
}

export default App;
