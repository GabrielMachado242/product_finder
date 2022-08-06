import React from "react";
import './styles.css';

function Campo(props){
    return(
        <div className="ucontainer">
        <div className="Container-cadastro">
            <div className="Wrap-cadastro">
                {props.children}

                <form className="cadastro-form">
                    <span className="cadastro-form-title">Product Finder</span> 
                    <div className="Wrap-input">
                        <input className="input" type="text" />
                        <span className="focus-input" data-placeholder="Nome completo"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className="input" type="text" />
                        <span className="focus-input" data-placeholder="Data de nascimento"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className="input" type="number" />
                        <span className="focus-input" data-placeholder="CNPJ"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className="input" type="email" />
                        <span className="focus-input" data-placeholder="E-mail"></span>
                    </div>
                    <div className="Wrap-input">
                        <input className="input" type="tel" />
                        <span className="focus-input" data-placeholder="Telefone"></span>
                    </div>
                    <div className="">
                        <input type="checkbox" />
                        <span className="focus-input" data-placeholder=""></span>
                    </div>
                    <div className="container-cadastro-form-btn">
                        <button className="cadastro-form-btn">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Campo;