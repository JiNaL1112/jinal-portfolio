// src/App.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Homelab from './components/Homelab';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

import HomelabPage from './pages/HomelabPage';
import ArticlesPage from './pages/ArticlesPage';  // ← NEW

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
        <Homelab />
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
        <Route path="/articles" element={<ArticlesPage />} />  {/* ← NEW */}
      </Routes>
    </BrowserRouter>
  );
}