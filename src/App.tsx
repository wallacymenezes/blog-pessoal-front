//import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login/Login';
import Cadastro from './paginas/Cadastro/Cadastro';
import Home from './paginas/Home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/ListaTemas/ListaTemas';
import FormularioTema from './components/FormularioTema/FormularioTema';
import DeletarTema from './components/DeletarTema/DeletarTema';
import ListaPostagem from './components/Postagem/ListaPostagem/ListaPostagem';
import FormularioPostagem from './components/Postagem/FormularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/Postagem/DeletarPostagem/DeletarPostagem';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagem />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;