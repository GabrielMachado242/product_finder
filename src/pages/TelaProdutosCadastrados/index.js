// importação
import React from "react";
import Header2 from "../../components/Layout2/index";
import Footer from "../../components/Layout/Rodape/footer";

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

                <tr key="{row.Id}">
                      <td>{row.Npme}</td>
                      <td>{row.Preço}</td>
                      <td>{row.Dados}</td>
                      
                  </tr>

                </tbody>
            </table>
    

            
        </div>
        
    );
};

export default TelaProdutos; 