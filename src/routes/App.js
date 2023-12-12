import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../containers/Home';
import Contactos from '../containers/Contactos';
import Productos from '../containers/Productos';
import Layout from '../components/Layout';

export default function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactos" element={<Contactos/>}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
    </Routes>
    </Layout>
    </BrowserRouter>
  );
}
