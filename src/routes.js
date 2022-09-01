import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import TelaCadastro from './pages/TelaCadastro';
import GerenciarProdutos from './pages/GerenciarProdutos';
import TelaProdutosCadastrados from './pages/TelaProdutosCadastrados';
import TelaLogin from './TelaLogin';
import Sobre from './pages/Sobre'

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastrar" element={<TelaCadastro />} />
                <Route path="/gerenciar-produtos" element={<GerenciarProdutos />} />
                <Route path="/produtos" element={<TelaProdutosCadastrados />} />
                <Route path="/sobre"    element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Rotas;