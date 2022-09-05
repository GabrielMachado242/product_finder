// importação
import React from "react";
import Header2 from "../../components/Layout2/Header2/index"
import Footer2 from "../../components/Layout2/Rodape2/Footer2"
import {  CDBBtn, CDBIcon,  } from 'cdbreact';
import {Form} from "react-bootstrap"


//import { Row, Column } from 'react-foundation';


// criando classe para poder utilizar metodos 
class TelaProdutos extends React.Component{

       //criando construtor para utilizar o state

       constructor(props) {
            super(props);

            this.state = {
                    nome: '',
                    preco: 0,
                    endereco: '',

                produtos : [
                        // apagar esses dados quando linkar com a api
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                    {'id' : 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                    {'id' : 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                    {'id' : 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                ]
            }
        }


// criação dos componentes que sera executado quando abrir ou fechar a pagina 
            // quando for montado
        componentDidMount(){
            // chamando as funções criadas 
            this.buscarProduto();

        }

        //quando for desmontado

        componentWillUnmount(){
            
        }

        // criando as funçoes para facilitar na hora do uso
        // FUNÇÂO GET para produto
        buscarProduto(){
              //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
             fetch("  ")
             //convertendo a tesposta para o formato json
             .then(resposta => resposta.json())
             // passando o resultado de cima para dados e depois mudando o estado de produtos
            .then(dados => {
                
                this.setState({ produtos : dados})
                
            })
        }
        // FUNÇÂO DELET
        deletarProduto = (id) => {
              //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
              fetch("  /"+id, { method: 'DELETE'})
              //como resposta é retornado somente o status
              .then(resposta =>{
                 if(resposta.ok){
                    this.buscarProduto();
                 }
             })
            
        }

        cadastraProduto= (produto) => {
            fetch("  ", 
                        { method: 'POST',
                        headers: {'Content-Type' : 'application/json'},
                        body: JSON.stringify(produto),
                         }
                )
            //como resposta é retornado somente o status
            .then(resposta =>{
               if(resposta.ok){
                  this.buscarProduto();
               }else{
                    alert('não foi possivel adicionar o produto!')
               }
        })
    }

        // FUNÇÃO RESPONSAVEL POR CRIAR E ATUALIZAR A TABELA
        renderTabela(){
                            
                    {/* criação das tabelas tabelas */}
                    return <table class="table table-dark table-striped">
            <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Editar</th>
                        </tr>
            </thead>

            <tbody>{
                
                    this.state.produtos.map((produto) =>
                    <tr>
                        <th scope="row"> {produto.id} </th>
                        <td>{ produto.nome} </td>
                        <td>{  produto.preco}</td>
                        <td> 
                            <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="fa-brands fa-periscope" /> 
                            </CDBBtn> 
                        </td>
                        <td>   
                        <button type="button" class="btn btn-light">Atualizar</button>     
                        <button type="button" class="btn btn-danger" onClick={() => this.deletarProduto(produto.id)}>Excluir</button>
                        </td>
                    </tr>
                    )         
                }                   
            </tbody>
   </table>
   
        }

// FUNÇÕES responsavel pela atualização do campo de cadastro
        atualizaNome = (e) => {
                this.setState(
                    {
                        nome: e.target.value
                    }
                )
        }
        atualizaPreco = (e) =>{
            this.setState(
                {
                    preco: e.target.value
                }
            )
    }

        atualizaEndereco = (e) =>{
                this.setState(
                    {
                        endereco: e.target.value
                    }
                )
        }

        submit(){
            const produto = {
                id:0,
                nome: this.state.nome,
                preco: this.state.preco,
                endereco: this.state.endereco
            }
            this.cadastraProduto(produto);

        }




    render(){
        return (
            <div className="body" >
             
             <Header2/>
                <form>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                            <Form.Label> nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome do produto e peso se tiver" value={this.state.nome} onChange={this.atualizaNome} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                            <Form.Label> Preço</Form.Label>
                            <Form.Control type="float" placeholder="Preço do produto" value={this.state.preco} onChange={this.atualizaPreco}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNome">
                            <Form.Label> Endereço</Form.Label>
                            <Form.Control type="text" placeholder="Endereço de venda" value={this.state.endereco} onChange={this.atualizaEndereco}/>
                    </Form.Group>
                    <button type="submit" class="btn btn-primary" onClick={this.submit}>Atualizar</button>
                 </form>

                     {this.renderTabela()}
                
               {/* <Footer2/> */}
            </div>   
        );
    };





    }
   

export default TelaProdutos; 