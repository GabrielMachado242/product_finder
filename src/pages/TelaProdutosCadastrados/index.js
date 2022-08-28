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

<<<<<<< HEAD
                      <tr key="{row.Id}">
                      <td>{row.Npme}</td>
                      <td>{row.Preço}</td>
                      <td>{row.Dados}</td>
=======
                {/* <tr key="{row.Id}">
                      <td>{row.Npme}</td>
                      <td>{row.Preço}</td>
                      <td>{row.Dados}</td>
>>>>>>> 537a6823472026ab5d7b6a12a33ec9fb130d9581
                      
                  </tr> */}

                </tbody>
            </table>
    

            
        </div>
        
    );
};

export default TelaProdutos; 