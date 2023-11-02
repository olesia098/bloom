import React from 'react';
import Navbar from './components/Nav/Navbar';
import Header from './components/Header/Header';
import Partner from './components/partner/Partner';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Partner/>
      <Footer/>
    </div>
  );
};

export default App;
