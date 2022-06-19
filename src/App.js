import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Hotplate = lazy(() => import('./Hotplate'));
const Dessert = lazy(() => import('./Dessert'));
const Promo = lazy(() => import('./Promo'));
const ContactPerson = lazy(() => import('./ContactPerson'));

function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/Hotplate" element={<Hotplate />} />
        <Route path="/Dessert" element={<Dessert />} />
        <Route path="/Promo" element={<Promo/>} />
        <Route path="/ContactPerson" element={<ContactPerson />} />
      </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
