import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import LandingLayout from './layouts/LandingLayout';



import Home from './pages/Home/Home.jsx';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Catalogue from './pages/Catalogue/Catalogue';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingLayout />}>
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="catalogue" element={<Catalogue />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
