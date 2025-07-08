import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { Toaster } from "react-hot-toast";
import TermsAndConditions from './pages/TermsAndConditions';
import Confirmation from './pages/Confirmation';
import Disclaimer from './pages/Disclaimer';
import Policy from './pages/Policy';

function App() {
  return (
    <Router>
      <Toaster />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;