import React from "react";
import Cabecalho from "../../TelaCadastro_header";
import Footer2 from "../../components/Layout2/Rodape2/Footer2";
import Campo from "../../components/CampoCadastro";

function TelaCadastro(){
    return (
        <div>
        <Cabecalho />
            <Campo />
            <Footer2 />
        </div>
        
    );
};

export default TelaCadastro; 