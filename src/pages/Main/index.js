import React from "react";
import Header from "../../components/Layout/Header/index";
import Footer2 from "../../components/Layout2/Rodape2/Footer2";
import {  CDBBtn, CDBIcon,  } from 'cdbreact';
import {Form, Modal} from "react-bootstrap";
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
                ],

                modalAberta: false

        }
    }


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
        
    </tr>
    )         
}                   
</tbody>
</table>

}

    render()
    {return(
        <div>
            <Header />
            
        {this.renderTabela()};


            <Footer2 />
        </div>

    );}

}

export default Home;