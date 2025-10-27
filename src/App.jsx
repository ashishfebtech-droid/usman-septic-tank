import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TankSelectionGuide from "./pages/TankSelectionGuide"; // ✅ Correct import
import { useLenis } from "./hooks/useLenis";
import "lenis/dist/lenis.css";

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
            <Route path="/tank-selection-guide" element={<TankSelectionGuide />} /> {/* ✅ Correct route */}
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