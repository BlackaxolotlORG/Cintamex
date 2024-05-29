import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import LandingLayout from './layouts/LandingLayout';



import Home from './pages/Home/Home.jsx';
import About from './pages/About/About';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingLayout />}>
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
