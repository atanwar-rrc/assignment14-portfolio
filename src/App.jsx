
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Setup from './pages/Setup';
export default function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/setup" element={<Setup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
