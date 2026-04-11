// src/App.tsx
// Run: npm install react-router-dom @types/react-router-dom

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Portfolio sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Homelab from './components/Homelab';      // ← section card
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Homelab standalone page
import HomelabPage from './pages/HomelabPage';  // ← full page

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Homelab />    {/* ← add between Projects and Articles */}
        <Articles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Portfolio />} />
        <Route path="/homelab"  element={<HomelabPage />} />
      </Routes>
    </BrowserRouter>
  );
}