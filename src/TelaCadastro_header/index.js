import React from "react";
import './styles.css';
import Logo from "../components/logo.png";

function Cabecalho (){
    return(
        <header className="cabecalhoDois">
            <img src={Logo} alt="Logo da Empresa" />
            <div className="Cont">
            <form>
            <label htmlFor="search">Digite aqui</label>
            <input name="search" id="search"/>
            </form>
            </div>
        </header>

    );
};

export default Cabecalho;