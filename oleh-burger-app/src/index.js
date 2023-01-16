import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'
import Contacts from './pages/Contacts/Contacts'
import FAQ from './pages/FAQ/FAQ'
import NotFound from './pages/NotFound/NotFound'

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
      <div className="app-wraper"> 
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);