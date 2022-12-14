import React, {useState} from "react";
import Header from "../../components/Layout/Header/index";
import Footer2 from "../../components/Layout2/Rodape2/Footer2";
import {  CDBBtn, CDBIcon  } from 'cdbreact';
import { Button} from "react-bootstrap";
import './style.css';
import Alimentos from "../../components/img/Tipos/Alimentos.png";
import Eletronicos from "../../components/img/Tipos/Eletronicos.png";
import Agropecuaria from "../../components/img/Tipos/Agropecuaria.png";
import Limpeza from "../../components/img/Tipos/Limpeza.png";
import Outros from "../../components/img/Tipos/Outros.png";
import Slider from "../../components/Carousel/index";
import img1 from "../../components/img/img.png";

class Home extends React.Component{
    

    constructor(props) {
        super(props);

        this.state = {
                id: 0,
                nome: '',
                preco: '',
                endereco: '',
                produtos : [
                        // apagar esses dados quando linkar com a api
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },

                ],

                modalAberta: false
                    
        }
    }


     // FUNÇÂO GET para produto
     buscarProduto(){
        
        //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
       fetch("https://localhost:7201/api/Produtos")
       //convertendo a tesposta para o formato json
       .then(resposta => resposta.json())
       // passando o resultado de cima para dados e depois mudando o estado de produtos
      .then(dados => {
          
          this.setState({ produtos : dados})
          
      })
  }

 // FUNÇÃO RESPONSAVEL POR CRIAR E ATUALIZAR A TABELA
 renderTabela(){           
    {/* criação das tabelas tabelas */}
    return <table class="table table-dark table-striped">
<thead>
        <tr>
        <th scope="col"></th>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Preço</th>
        <th scope="col">Endereço</th>
     
        </tr>
</thead>

<tbody>{

    this.state.produtos.map((produto) =>
    <tr>
         <td><img className="imgProd" src= {img1}    /> </td>
        <th scope="row"> {produto.id} </th>
        <td>{ produto.nome} </td>
        <td>{  produto.preco}</td>
        <td> 
            <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="fa-brands fa-periscope" /> 
            </CDBBtn> 
        </td>
        
    </tr>
    ) 
}                   
</tbody>
</table>

}




    render()

    

    {return(
            
        <div class= " bg-secondary text-white">
            <Header />
            <div>

                     <div className="pesquisa">
                                        <form class= "d-flex">
                                            <input class="form-control mt-2 " type={"text"} placeholder="O que você procura ?"
                                            />
                                            <Button variant="dark  mr-1 mt-2" >Pesquisar 
                                            
                                            </Button>
                                        </form>
                                    
                                        </div>

            </div>
            

        {/* TESTANDO O USO DE Carousel  */}
        {/* <h1 class= "bg-dark text-white d-flex flex-column justify-content-center align-items-center ">Marcas em destaque</h1> */}

        <Slider/>

       
{/* CRIANDO OS FILTROS POR TIPO DE PRODUTO */}
      <div className=" imgTipos2">
      <a  href = "http://localhost:3000">
                <img  className=" imgTipos" src={Alimentos} alt="Logo da Empresa" />
            </a>
            <a  href = "http://localhost:3000/produtos">
                <img   className=" imgTipos" src={Eletronicos} alt="Logo da Empresa" />
            </a>
            <a  href = "http://localhost:3000">
                <img  className=" imgTipos" src={Agropecuaria} alt="Logo da Empresa" />
            </a>
            <a  href = "http://localhost:3000">
                <img  className=" imgTipos" src={Limpeza} alt="Logo da Empresa" />
            </a>
            <a  href = "http://localhost:3000">
                <img  className=" imgTipos" src={Outros} alt="Logo da Empresa" />
            </a>
      </div>
        


{/* IMPORTANDO AS FUNÇÕES */}
        {this.renderTabela()}


            <Footer2 />
        </div>

    );}

} 

export default Home ;