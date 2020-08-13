import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaPlus, FaMinus, FaClipboardCheck } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const history = useHistory();

    //const idusuarios = localStorage.getItem('idusuarios');
    const nome = localStorage.getItem('nome');
    const idlistas = localStorage.getItem('lista');
    //localStorage.removeItem('lista');

    useEffect(() => {
        let mounted = true; //usada para verificar as funcoes assincronas
        api.get('produtos', {
            params: {
               lista: idlistas
            }
        }).then(response => {
            if(mounted){
                setProdutos(response.data.rows);
            }
        })

        return () => mounted = false;
    }, [produtos, idlistas]);

    let produtosToRender;
    if (produtos) {
        produtosToRender = 
        produtos.map( produto =>
            <tr key={produto.idprodutos}>
                <td>{produto.nome}</td>
                <td>
                    <input
                        type="number"
                        defaultValue={produto.quantidade}
                        onChange={(e) => handleAlterar(produto.idprodutos, e, 'quantidade', produto.status)}
                    />
                </td>
                <td>
                    <input 
                        type="number"
                        defaultValue={produto.preco}
                        onChange={(e) => handleAlterar(produto.idprodutos, e, 'preco', produto.status)}
                    />      
                </td>

                {pegarBotao(produto.status, produto.idprodutos)}
            </tr>
        )
    }
    else{
        produtosToRender = "Adicione algum produto";
    }

    
    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }   

    async function handleConcluirLista(idlistas, string) {
        const dados = ({
            idlistas,
            string
        })

        try{
            await api.put('listas', dados);
            history.push('/listas');
        } catch{
            alert('Erro ao excluir lista. Tente novamente!');
        }
    }

    async function handleAlterar(idprodutos, e, string, status) {
        const valor = e.target.value

        const dados = ({
            idprodutos,
            valor,
            string,
            status
        })

        try{
            await api.put('produtos', dados);
        } catch{
            alert('Erro ao alterar produto. Tente novamente!');
        }
    }

    function pegarBotao(status, idprodutos){

        if(status === 1){
            return(
                <td>
                    <button className='botao-verde' type="submit" onClick={(e) => handleAlterar(idprodutos, e, 'status', status)}>
                        <FaPlus size={15}/>
                    </button>
                </td>
                )
        }
        else if(status === 2){
            return(
                <td>
                    <button className='botao-vermelho' type="submit" onClick={(e) => handleAlterar(idprodutos, e, 'status', status)}>
                        <FaMinus size={15}/>
                    </button>
                </td>
            ) 
        }
        
    }

    return (
        <div className="produtos-container">
            <header>
                <Link to="/listas">  
                    <img src={logoImg} alt="Lista do Rancho" width="100"/>
                </Link>
                <span>Seja Bem Vindo, {nome}</span>
                
                <button onClick={handleLogout} type="button">
                    <FaPowerOff size={18} color="#164897"/>
                </button>
            </header>
            
            <div className="cabecalho">
                <h1>Produtos Ativos</h1>

                <button onClick={(e) => {e.stopPropagation(); handleConcluirLista(idlistas, 'alterar')}} className="botao-concluir" type="button">
                    <FaClipboardCheck  size={30} color="#164897"/>
                </button> 
            </div>

            <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>PRODUTO</th>
                            <th>QNT</th>
                            <th>VALOR</th>
                            <th>STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtosToRender}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>

                <Link className="botao-mais" to="novoproduto"> 
                        <FaPlus size={40} color="#164897"/>
                </Link>
            </div>
        </div>
    );
}