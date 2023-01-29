import React from 'react';
// components
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Nav from './components/Nav';

function App() {
  return (
    <div class='bg-stone-100'>
      <h1 class="font-bold tracking-tight hover:tracking-wide">
        Hello world!
      </h1>
      <Nav />
      <About />
      <Banner />
      <Contact />
      <div class='bg-stone-100 h-screen'></div>
    </div>
  );
}

export default App;
