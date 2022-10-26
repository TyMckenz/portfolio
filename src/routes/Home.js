import React from 'react';
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home
