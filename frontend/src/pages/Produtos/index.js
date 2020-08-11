import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const history = useHistory();

    var total;

    const idusuarios = localStorage.getItem('idusuarios');
    const nome = localStorage.getItem('nome');
    const lista = localStorage.getItem('lista');
    //localStorage.removeItem('lista');

    useEffect(() => {
        api.get('produtos', {
            params: {
               lista: lista
            }
        }).then(response => {
            setProdutos(response.data.rows);
        })
    }, [produtos, lista]);

    function handleLogout () {
        localStorage.clear();
        history.push('/');
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
                        Confirmar
                    </button>
                </td>
                )
        }
        else if(status === 2){
            return(
                <td>
                    <button className='botao-vermelho' type="submit" onClick={(e) => handleAlterar(idprodutos, e, 'status', status)}>
                        Excluir
                    </button>
                </td>
            ) 
        }
        
    }

    return (
        <div className="produtos-container">
            <header>
                <img src={logoImg} alt="Lista do Rancho" width="100"/>
                <span>Seja Bem Vindo, {nome}</span>

                <Link className="botao" to="/novo">Cadastrar Lista</Link>
                <button onClick={handleLogout} type="button">
                    <FaPowerOff size={18} color="#164897"/>
                </button>
            </header>

            <h1>Produtos Ativos</h1>

            <table>
                <thead>
                    <tr>
                        <th>PRODUTO</th>
                        <th>DESCRIÇÃO</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>STATUS</th>
                    </tr>
                </thead>

                <tbody>
                {total = 0}
                {produtos.map( produto => ( 
                    <tr key={produto.idprodutos}>
                        <td>{produto.nome}</td>
                        <td>{produto.descricao}</td>
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
                ),)}
                </tbody>

                <tfoot>
                    <tr>
                        {total}
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}