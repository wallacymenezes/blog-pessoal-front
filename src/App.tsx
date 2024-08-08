//ELEMENTO JXS/TSX => Função que retorna HTML

//import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>

        <Footer/>

      </BrowserRouter>
    </>
);
}
export default App;
