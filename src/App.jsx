import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TankSelectionGuide from "./pages/TankSelectionGuide";
import { useLenis } from "./hooks/useLenis";
import "lenis/dist/lenis.css";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {
  useLenis();

  // Production mein basename set karo, local mein empty string
  const basename = import.meta.env.MODE === 'production' ? '/usman-septic-tank/' : '/';

  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/tank-selection-guide"
              element={<TankSelectionGuide />}
            />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;