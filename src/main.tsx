import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import About from './components/about.tsx';
import PrizePool from './components/PrizePool/PrizePool.tsx';
import Faq from './components/faq/faq.tsx';
import Contact from './components/Contact/Contact.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/nav" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/prizepool" element={<PrizePool/>}/>
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
