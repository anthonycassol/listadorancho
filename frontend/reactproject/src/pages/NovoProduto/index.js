import React, {useState} from 'react';
import { Link,  useHistory } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function NovoProduto() {
    const [nome, setNome] = useState('');
    const [descricao, setSobrenome] = useState('');
    const [quantidade, setQuantidade] = useState(null);
    const [preco, setPreco] = useState(null);

    const history = useHistory();

    const idusuarios = localStorage.getItem('idusuarios');
    const nomeusuario = localStorage.getItem('nome');
    const idlistas = localStorage.getItem('lista');
    

    async function handleCadastrar(e){
        e.preventDefault();

        const dados = ({
            nome,
            descricao,
            idlistas,
            quantidade,
            preco
        })

        try{
            await api.post('produtos', dados, {
                headers: {
                    Authorization: idusuarios
                }
            });
            alert(`Produto cadastrado com Sucesso.`);
            history.push('/produtos');
        }catch (err){
            alert('Erro, tente novamente');
        }
    }

    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="cadastro-container">
            <header>
                <Link to="/listas">  
                    <img src={logoImg} alt="Lista do Rancho" width="100"/>
                </Link>
                <span>Seja Bem Vindo, {nomeusuario}</span>
                <button onClick={handleLogout} type="button">
                    <FaPowerOff size={18} color="#164897"/>
                </button>
            </header>
            <div className="content">
                <h2>Cadastrar Novo Produto</h2>
                <form onSubmit={handleCadastrar}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        defaultValue={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Descrição"
                        defaultValue={descricao}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Quantidade"
                        defaultValue={quantidade}
                        step="0.01"
                        onChange={e => setQuantidade(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Preço"
                        defaultValue={preco}
                        step="0.01"
                        onChange={e => setPreco(e.target.value)}
                    />
                    <button className="botao" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}