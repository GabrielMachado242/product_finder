import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import TelaCadastro from './pages/TelaCadastro';
import GerenciarProdutos from './pages/GerenciarProdutos';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/login" element={<TelaCadastro />} />
                <Route path="/gerenciar-produtos" element={<GerenciarProdutos />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Rotas;