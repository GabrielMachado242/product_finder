// importação
import React from "react";
import Header2 from "../../components/Layout2/Header2/index";
import Footer2 from "../../components/Layout2/Rodape2/Footer2";
import img1 from "../../components/img/Produtos/images.png";
import {  CDBBtn, CDBIcon,  } from 'cdbreact';
import {Form, Modal, Col} from "react-bootstrap";


//import { Row, Column } from 'react-foundation';


// criando classe para poder utilizar metodos 
class TelaProdutos extends React.Component{

       //criando construtor para utilizar o state

       constructor(props) {
            super(props);

            this.state = {
                    
                    id: 0,
                    fk:2,
                    nome: '',
                    preco: '',
                    endereco: 'Nao tem nome',
                    produtos : [
                            // apagar esses dados quando linkar com a api
                        {'id' : 1,'fk': 1, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                        {'id' : 2, 'fk': 2,'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                        {'id' : 3,'fk': 3, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 1, 'fk': 2,'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                        {'id' : 2,'fk': 2, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk': 3,'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 1, 'fk': 3,'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                        {'id' : 2,'fk': 4, 'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk': 2,'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 1, 'fk': 1,'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                        {'id' : 2, 'fk': 1,'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk': 1,'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 3,'fk': 4, 'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 1, 'fk': 2,'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                        {'id' : 2, 'fk': 3,'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk': 3,'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk':2,'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 1,'fk': 2, 'nome' : 'macarrão vendeu', 'preco' : 'R$ '+5.25  },
                        {'id' : 2, 'fk': 2,'nome' : 'feijão preto', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk': 1,'nome' : 'batata 5K', 'preco' : 'R$ '+20.00 },
                        {'id' : 3, 'fk': 1,'nome' : 'feijão 5K', 'preco' : 'R$ '+20.00 },
                    ],

                    modalAberta: false,
                    modalAberta2: false

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
             fetch(" https://localhost:7201/api/Produtos ")
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
              fetch(" https://localhost:7201/api/Produtos/"+id, { method: 'DELETE'})
              //como resposta é retornado somente o status
              .then(resposta =>{
                 if(resposta.ok){
                    this.buscarProduto();
                 }
             })
            
        }

        atualizarDadosProduto = (id) => {
            //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
            fetch(" https://localhost:7201/api/Produtos /"+id, { method: 'GET'})

            //como resposta é retornado somente o status
            .then(resposta => resposta.json())

            // passando o resultado de cima para dados e depois mudando o estado de produtos
           .then(produto => {   
               this.setState({ 
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                endereco: produto.endereco})  
           })
           this.abrirModal();
          
      }
// FUNÇÃO POST para cadastrar o produto
        cadastraProduto= (produto) => {
            fetch(" https://localhost:7201/api/Produtos ", 
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

    
// FUNÇÃO metodo PUT para cadastrar o produto
atualizaProduto= (produto) => {
    fetch("https://localhost:7201/api/Produtos", 
                { method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(produto),
                 }
        )
    //como resposta é retornado somente o status
    .then(resposta =>{
       if(resposta.ok){
          this.buscarProduto();
       }else{
            alert('não foi possivel atualizar o produto!')
       }
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
                        <th scope="col">Onde encontrar</th>
                        <th scope="col">Editar</th>
                        <th> <button type="submit" class="btn btn-primary" onClick={this.reset}>
                                Novo
                             </button>
                        </th>
                        </tr>
            </thead>

            <tbody>{
                
                    this.state.produtos.map((produto) =>
                    <tr>
                        <td><img src= {img1} class= "m=1" /> </td>
                        <th scope="row"> {produto.id} </th>
                        <td>{ produto.nome} </td>
                        <td>{  produto.preco}</td>
                        <td> 
                            <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="fa-brands fa-periscope"onClick={() => this.mostrarLocal(produto.id)} /> 
                            </CDBBtn> 
                        </td>
                        <td>   
                        <button type="button" class="btn btn-light m-1"onClick={() => this.atualizarDadosProduto(produto.id)}>Atualizar</button>     
                        <button type="button" class="btn btn-danger m-1" onClick={() => this.deletarProduto(produto.id)}>Excluir</button>
                        </td>
                        <td> </td>
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
        //Função para pegar somente o endereço que o produto esta registrado
        mostrarLocal = (id) => {
            //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
            fetch(" https://localhost:7201/api/Produtos /"+id, { method: 'GET'})

            //como resposta é retornado somente o status
            .then(resposta => resposta.json())

            // passando o resultado de cima para dados e depois mudando o estado de produtos
           .then(produto => {   
               this.setState({ 
                endereco: produto.endereco})  
           })
           this.abrirModal2();
          
      }

        // função chamada quanto o botão de salvar produto for acionado tanto para atualizar quanto para salvar um novo
        submit = () =>{

            if(this.state.id == 0){
                const produto = {
                    nome: this.state.nome,
                    preco: this.state.preco,
                    endereco: this.state.endereco
                }
                this.cadastraProduto(produto);
            }else{

                const produto = {
                    id:this.state.id,
                    nome: this.state.nome,
                    preco: this.state.preco,
                    endereco: this.state.endereco
                }

                this.atualizaProduto(produto);
            }
            this.fecharModal();

        }

        reset = () =>{
            this.setState(
                {
                    id:0,
                    nome: '',
                    preco: '',
                    endereco: ''
                })
                this.abrirModal();
        }


        // funcção modal
        // modal de cadastro e atualização

        abrirModal = () => {
            this.setState({
                modalAberta: true
            })

        }
        fecharModal = () => {
            this.setState({
                modalAberta: false
            })

        }
        //modal de endereço
        abrirModal2 = () => {
            this.setState({
                modalAberta2: true
            })

        }
        fecharModal2 = () => {
            this.setState({
                modalAberta2: false
            })

        }
        //modal de exclusão
        abrirModal3 = () => {
            this.setState({
                modalAberta3: true
            })

        }
        fecharModal3 = () => {
            this.setState({
                modalAberta3: false
            })

        }


        //Criação MODAL para cadastro e atualização de produtos

    render(){
        return (
            <div class=" bg-secondary " >
             
             <Header2/>

                {/* MODAL CADASTRA PRODUTO */}

                <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Dados do produto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>  
                            <Form.Group className="mb-3" >
                                        <Form.Label> ID:</Form.Label>
                                        <Form.Control type="text" readOnly={true}  />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" >
                                        <Form.Label> Nome:</Form.Label>
                                        <Form.Control type="text" placeholder="Nome do produto e peso se tiver" value={this.state.nome} onChange={this.atualizaNome} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                        <Form.Label> Preço:</Form.Label>
                                        <Form.Control type="number" placeholder="Preço do produto" value={this.state.preco} onChange={this.atualizaPreco}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                        <Form.Label> Endereço:</Form.Label>
                                        <Form.Control type="text" placeholder="Endereço de venda" value={this.state.endereco} onChange={this.atualizaEndereco}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Tipo:</Form.Label>
                                <Form.Select defaultValue="Escolha">
                                    <option>Grãos</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </Form.Select>
                                </Form.Group>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary"  class="btn btn-primary" onClick={this.fecharModal}>
                        Fechar
                    </button>

                    <button type="submit" class="btn btn-primary" onClick={this.submit}>
                        Salvar
                    </button>

                    </Modal.Footer>
                </Modal>

                {/* MODAL INFORMA ENDEREÇO */}

                <Modal show={this.state.modalAberta2} onHide={this.fecharModal2}>
                    <Modal.Header closeButton>
                    <Modal.Title>Endereço do produto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>  
                                <Form.Group className="mb-3">
                                        <Form.Label> Endereço</Form.Label>
                                        <Form.Control type="text" readOnly={true} onChange={this.atualizaEndereco}/>
                                </Form.Group>
                                
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <button variant="secondary"  class="btn btn-primary" onClick={this.fecharModal2}>
                        Fechar
                    </button>

                    </Modal.Footer>
                </Modal>

                {/* Modal de confirmação de exclusão ainda em desenvolvimento*/}
                <Modal show={this.state.modalAberta3} onHide={this.fecharModal3}>
                    <Modal.Header closeButton>
                    <Modal.Title>AVISO</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4> Deseja mesmo excuir o produto?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                    <button type="button" class="btn btn-danger m-1" onClick={this.fecharModal3}>Sim</button>
                    <button variant="secondary"  class="btn btn-primary" onClick={this.fecharModal3}>
                        Fechar
                    </button>

                    </Modal.Footer>
                </Modal>
                {/* CHAMADA DE FUNÇÔES */}

                     {this.renderTabela()}
                
               <Footer2/>
            </div>   
        );
    };
    }
   

export default TelaProdutos; 