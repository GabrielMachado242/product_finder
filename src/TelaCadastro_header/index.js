import React from "react";
import './styles.css';
import Logo from "../components/img/logo.png";
import Header2 from "../components/Layout2/Header2/index";

function Cabecalho (){
    return(

            <header className="cabecalhoDois">
                 <img src={Logo} alt="Logo da Empresa" />
                <div className="Cont">
                <form>
                
                </form>
                </div>
            </header>
    );
};

export default Cabecalho;