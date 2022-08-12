import React from "react";
import './styles.css';
import { useState } from 'react';

function Campo(props){

    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [cnpj, setCNPJ] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    return(
        <div className="ucontainer">
        <div className="Container-cadastro">
            <div className="Wrap-cadastro">
                {props.children}

                <form className="cadastro-form">
                    <span className="cadastro-form-title">Product Finder</span> 
                    <div className="Wrap-input">
                        <input className={nome !== "" ? 'has-val input' : 'input'} type="text" value={nome} onChange={e => setNome(e. target.value)} />
                        <span className="focus-input" data-placeholder="Nome completo"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={data !== "" ? 'has-val input' : 'input'} type="date" value={data} onChange={e => setData(e. target.value)} />
                        <span className="focus-input" data-placeholder=""></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={cnpj !== "" ? 'has-val input' : 'input'} type="number" value={cnpj} onChange={e => setCNPJ(e. target.value)} />
                        <span className="focus-input" data-placeholder="CNPJ"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e. target.value)} />
                        <span className="focus-input" data-placeholder="E-mail"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className={telefone !== "" ? 'has-val input' : 'input'} type="tel" value={telefone} onChange={e => setTelefone(e. target.value)} />
                        <span className="focus-input" data-placeholder="Telefone"></span>
                    </div>
                    <div className="">
                        <input type="checkbox" />
                        <span className="focus-input" data-placeholder=""></span>
                    </div>
                    <div className="container-cadastro-form-btn">
                        <button className="cadastro-form-btn" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Campo;