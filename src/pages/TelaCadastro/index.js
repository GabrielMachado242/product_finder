import React from "react";
import Cabecalho from "../../TelaCadastro_header";
import Footer from "../../Rodape/footer";
import Campo from "../../components/CampoCadastro";

function TelaCadastro(){
    return (
        <div>
        <Cabecalho />
        <h1>Tela de cadastro do fornecedor</h1>
            <Campo>
                <form className="cadastro-form">
                    <span className="cadastro-form-title">Product Finder</span> 
                    <div className="Wrap-input">
                        <input type="email" />
                    </div>
                </form>
            </Campo>
            <Footer />
        </div>
        
    );
};

export default TelaCadastro; 