// importação
import React from "react";
import Header2 from "../../components/Layout2/Header2/index"
import Footer2 from "../../components/Layout2/Rodape2/Footer2"
import {  CDBBtn, CDBIcon } from 'cdbreact';



//import { Row, Column } from 'react-foundation';



function TelaProdutos(){
    return (
        <div className="body" >
         
            <Header2/>
            <Footer2/>
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

                <tr>
                    <th scope="row">1</th>
                    <td>Arroz</td>
                    <td>13,00</td>
                    <td> 
                        <CDBBtn flat color="dark" className="p-2">
                         <CDBIcon fab icon="fa-brands fa-periscope" /> 
                         </CDBBtn> 
                    </td>
                </tr>

                {/* <tr key="{row.Id}">
                      <td>{row.Npme}</td>
                      <td>{row.Preço}</td>
                      <td>{row.Dados}</td>

                      
                  <tr /> */}

                </tbody>
            </table>
    

            
        </div>
        
        
    );
};

export default TelaProdutos; 