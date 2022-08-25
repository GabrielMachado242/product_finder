// importação
import React from "react";
import Header2 from "../../components/Layout2/index";
import Footer from "../../components/Layout/Rodape/footer";
import { Row, Column } from 'react-foundation';

function TelaProdutos(){
    return (
        <div className="body" >
            <Header2/>
            <Footer/>
           <h1></h1>
           
           {/* criação das tabelas tabelas */}
           <table class="table table-dark table-striped">
                        <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Dados</th>
                    </tr>
                </thead>
                <tbody>

                      <tr key="{Row.Id}">
                      <td>{Row.Npme}</td>
                      <td>{Row.Preço}</td>
                      <td>{Row.Dados}</td>
                      
                  </tr>

                </tbody>
            </table>
    

            
        </div>
        
    );
};

export default TelaProdutos; 