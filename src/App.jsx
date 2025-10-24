import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';  // Add this
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />  {/* Add this line */}
        <Enquiry />
      </main>
      <Footer />
    </div>
  );
}

export default App;