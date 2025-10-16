import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import './index.css'
import About from "./page/About/about.jsx";
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/footer.jsx';
import ContactForm from './Components/ContactUS/contactus.jsx';
import Skills from './page/Skills/skills.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='container'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer/>
    </div>
    </BrowserRouter>
  </StrictMode>
)
