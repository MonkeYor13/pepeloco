import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Contactos from '../containers/Contactos';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactos" element={<Contactos/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}
