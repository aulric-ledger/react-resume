import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Expertise from './pages/Expertise';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={Home()} />
          <Route path='/expertise' element={Expertise()} />
          <Route path='/portfolio' element={Portfolio()} />
          <Route path='/contact' element={Contact()} />
          <Route path='*' element={NotFound()} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
