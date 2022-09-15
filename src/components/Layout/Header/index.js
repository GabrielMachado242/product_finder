import React from "react";
import Logo from "../../img/logo.png";
import {FiMenu} from 'react-icons/fi';
import './estilo.css';
import {Button, Form, Modal, Nav} from 'react-bootstrap';


class Header extends React.Component{

    //criação do construtor
            constructor(props) {
                        super(props);

                        this.state = {
                                

                                 CNPJ: '',
                                nome: '',
                                endereco: 'Nao tem nome',
                                cadastros : [
                                        // apagar esses dados quando linkar com a api
                                    {'CNPJ' : 1,'fk': 1, 'nome' : 'jorge', 'endereco' : 'Rua josé de abreu'  },
                                    
                                ],

                               
                                

                        }
                    }
//criação dos metodos 


 // FUNÇÂO GET para produto
 buscarCadastro(){
    //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
   fetch("  ")
   //convertendo a tesposta para o formato json
   .then(resposta => resposta.json())
   // passando o resultado de cima para dados e depois mudando o estado de produtos
  .then(dados => {
      
      this.setState({ cadastros : dados})
      
  })
}
// FUNÇÂO DELET
deletarCadastro = (CNPJ) => {
    //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
    fetch("  /"+CNPJ, { method: 'DELETE'})
    //como resposta é retornado somente o status
    .then(resposta =>{
       if(resposta.ok){
          this.buscarCadasto();
       }
   })
  
}

atualizarDadosCadastro = (CNPJ) => {
  //fazendo busca na api FALTA COLOCAR O ENDEREÇO DA API DENTRO DO FATCH
  fetch("  /"+CNPJ, { method: 'GET'})

  //como resposta é retornado somente o status
  .then(resposta => resposta.json())

  // passando o resultado de cima para dados e depois mudando o estado de produtos
 .then(cadastro => {   
     this.setState({ 
      CNPJ: cadastro.CNPJ,
      nome: cadastro.nome,
      endereco: cadastro.endereco})  
 })
 this.abrirModal();

}
// FUNÇÃO POST para fazer o cadastro cadastrar
cadastrar= (produto) => {
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


//FUNÇÂO MODAL


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


    render (){
    return(

        // componentes do HEADER
        <div>
                <header className="cabecalhoUm me-auto   ">
                                        <img src={Logo} alt="Logo da Empresa" />
                                        <div className="header_estilo_container">
                                        <form class= "d-flex">
                                            <input class="form-control m-1" type={"text"}/>
                                            <Button variant="dark  mr-1">Pesquisar</Button>
                                        </form>
                                    
                                        </div>
                                    
                                        <nav>
                                            <ul>
                                                
                                                <li><Button variant="dark" onClick={this.abrirModal}>Login</Button></li>
                                                <li><Button variant="dark" href="http://localhost:3000/cadastrar">Registre-se</Button></li>
                                                <li><Button  variant="dark" href="http://localhost:3000/sobre">Sobre</Button></li>
                                                {/* botao temporario só pra acessar os produtos mais facilmente  */}
                                                <li><Button  variant="dark" href="http://localhost:3000/produtos">Ver meus Produtos</Button></li>
                                            </ul>
                                        </nav>
                        </header>


                        {/* MODAL DO Login */}

                        <Modal show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Fazer login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>  
                                
                                <Form.Group className="mb-3" >
                                        <Form.Label> Email:</Form.Label>
                                        <Form.Control type="text"  placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                              
                             
                                
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                   

                    <button type="submit" class="btn btn-primary" onClick={this.submit}>
                        Ir
                    </button>
                 <div>

                 <Button variant="link" href="http://localhost:3000/cadastrar" > Criar novo cadastro</Button> 


                 </div>
                                        </Modal.Footer>
                </Modal>


              

        </div>

       

    );}
};

export default Header;