import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Enquiry from '../components/Enquiry';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      
      <Testimonials />
      <Enquiry />
    </>
  );
};

export default Home;