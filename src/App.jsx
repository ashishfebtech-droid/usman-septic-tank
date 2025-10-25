import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';  // Add this
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import VisualGuide from './components/VisualGuide';
import HowItWorks from './components/HowItWorks';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Products />
        <VisualGuide />
        <HowItWorks />
        <About />  {/* Add this line */}
        <Enquiry />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;