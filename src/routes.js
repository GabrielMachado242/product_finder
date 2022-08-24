import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import TelaCadastro from './pages/TelaCadastro';
import GerenciarProdutos from './pages/GerenciarProdutos';
import TelaProdutosCadastrados from './pages/TelaProdutosCadastrados';
import TelaLogin from './TelaLogin';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Main />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastrar" element={<TelaCadastro />} />
                <Route path="/gerenciar-produtos" element={<GerenciarProdutos />} />
                <Route path="/Produtos" element={<TelaProdutosCadastrados />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Rotas;