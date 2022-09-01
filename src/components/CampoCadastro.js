import React from "react";
import './styles.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Campo(props){

    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [cnpj, setCNPJ] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("") 

    const [fornecedor, setFornecedor] = useState({
        Nome: '',
        Data: '',
        cnpj: '',
        email: '',
        telefone: ''
    });

    const valorInput = e => setFornecedor({...fornecedor, [e.target.name]: e.target.value});

    const express = require('express');

    const cors = require('cors');
    

    const app = express();

    app.use(
        cors({
        origin: "*",
        credentials: true
    })
    );


    const CadFornecedor = async e =>{
        e.preventDefault();
        // console.log(fornecedor.Nome);
        // console.log(fornecedor.Data);
        // console.log(fornecedor.cnpj);
        // console.log(fornecedor.telefone);
        // console.log(fornecedor.email);

        await fetch("http://localhost/API/Cadastrar.php.json", {
            method: "POST", credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            },

            body: JSON.stringify({fornecedor})
        })

        .then((response) => response.json())
        .then((responseJson) => (
           console.log(responseJson)
        ));
    }

    return(
        <div className="ucontainer">
        <div className="Container-cadastro">
            <div className="Wrap-cadastro">
                {props.children}

                <form className="cadastro-form" onSubmit={CadFornecedor}>
                    <span className="cadastro-form-title">Product Finder</span> 
                    <div className="Wrap-input">
                        <input className={nome!== "" ? 'has-val input' : 'input'} name="Nome" type="text" onChange={valorInput}  />
                        <span className="focus-input" data-placeholder="Nome completo"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={data !== "" ? 'has-val input' : 'input'} type="date" name="Data" onChange={valorInput}  />
                        <span className="focus-input" data-placeholder=""></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={cnpj !== "" ? 'has-val input' : 'input'} type="number" name="cnpj" onChange={valorInput}  />
                        <span className="focus-input" data-placeholder="CNPJ"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={email !== "" ? 'has-val input' : 'input'} type="email" name="email" onChange={valorInput}  />
                        <span className="focus-input" data-placeholder="E-mail"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={telefone !== "" ? 'has-val input' : 'input'} type="tel" name="telefone" onChange={valorInput}  />
                        <span className="focus-input" data-placeholder="Telefone"></span>
                    </div>
                    <div className="">
                        <input type="checkbox" />
                        <span className="focus-input" data-placeholder=""></span>
                    </div>
                    <div className="container-cadastro-form-btn">

                          <Button variant="primary" className="cadastro-form-btn" type="submit">Salvar</Button>{' '}

                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Campo;