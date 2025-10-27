import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { useLenis } from "./hooks/useLenis";  // Add this import
import "lenis/dist/lenis.css";  // Add this import

function App() {
  useLenis();
  
  return (
    <Router basename="/usman-septic-tank">
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
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