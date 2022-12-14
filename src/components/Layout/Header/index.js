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

abrirModal2 = () => {
    this.setState({
        modalAberta2: true,
        modalAberta: false,
    })

}

fecharModal = () => {
    this.setState({
        modalAberta: false,
        modalAberta2: false
    })
}



    render (){
    return(

        // componentes do HEADER
        <div>
                <header className="cabecalhoUm me-auto   ">
                    <a  alt="Costs" href = "http://localhost:3000">
                                        <img className="logo" src={Logo} alt="Logo da Empresa" />
                    </a>
                                        {/* <div className="header_estilo_container">
                                        <form class= "d-flex">
                                            <input class="form-control m-1" type={"text"}/>
                                            <Button variant="dark  mr-1">Pesquisar</Button>
                                        </form>
                                    
                                        </div> */}
                                    
                                        <nav>
                                            <ul>
                                                 <li><Button variant="dark" href="http://localhost:3000">Home</Button></li>
                                                <li><Button variant="dark" onClick={this.abrirModal}>Login</Button></li>
                                                <li><Button variant="dark" onClick={this.abrirModal2}>Registre-se</Button></li>                                       
                                                <li><Button  variant="dark" href="http://localhost:3000/sobre">Sobre</Button></li>
                                             
                                            </ul>
                                        </nav>
                        </header>


                        {/* MODAL DO Login */}

                        <Modal className="t-modal primary" show={this.state.modalAberta} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Fazer login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>  
                                
                                <Form.Group className="mb-3" >
                                        <Form.Label> E-mail:</Form.Label>
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
                    <Button variant="link"  onClick={this.abrirModal2} > Criar novo cadastro</Button> 
                
                                        </Modal.Footer>
                </Modal>

            {/* Modal do Registre-se */}

            <Modal className="t-modal primary" show={this.state.modalAberta2} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Fazer Registro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>  
                                
                                <Form.Group className="mb-3" >
                                        <Form.Label> Nome completo:</Form.Label>
                                        <Form.Control type="text"  placeholder="Nome completo" />
                                </Form.Group><Form.Group className="mb-3" >
                                        <Form.Label> Senha:</Form.Label>
                                        <Form.Control type="text"  placeholder="Senha" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                        <Form.Label> Data:</Form.Label>
                                        <Form.Control type="date"  placeholder="00/00/0000" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                        <Form.Label> CNPJ:</Form.Label>
                                        <Form.Control type="number"  placeholder="CNPJ" />
                                     
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                        <Form.Label> E-mail:</Form.Label>
                                        <Form.Control type="text"  placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                        <Form.Label> Telefone:</Form.Label>
                                        <Form.Control type="number"  placeholder="(xx) x xxxx-xxxx" />
                                </Form.Group>
                                
                             
                                
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                   

                    <button type="submit" class="btn btn-primary" onClick={this.submit}>
                        Registre-se
                    </button>
                    <button type="submit" class="btn btn-primary" onClick={this.fecharModal}>
                        Voltar
                    </button>
                 
                                        </Modal.Footer>
                </Modal>


              

        </div>

       

    );}
};

export default Header;