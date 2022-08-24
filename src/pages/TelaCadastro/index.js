import React from "react";
import Cabecalho from "../../TelaCadastro_header";
import Footer from "../../components/Layout/Rodape/footer";
import Campo from "../../components/CampoCadastro";

function TelaCadastro(){
    return (
        <div>
        <Cabecalho />
            <Campo />
            <Footer />
        </div>
        
    );
};

export default TelaCadastro; 