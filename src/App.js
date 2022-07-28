import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {NavbarComp, Footer} from './components'
import {Home, Search} from './pages'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
       <NavbarComp />
       
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/search" element={<Search />} exact/>
          </Routes>
        </main>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
