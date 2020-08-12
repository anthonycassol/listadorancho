import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function NovaLista() {
    const [nome, setNome] = useState('');
    const [descricao, setSobrenome] = useState('');

    const history = useHistory();

    const idusuarios = localStorage.getItem('idusuarios');
    const nomeusuario = localStorage.getItem('nome');
    

    async function handleCadastrar(e){
        e.preventDefault();

        const dados = ({
            nome,
            descricao
        })

        try{
            await api.post('listas', dados, {
                headers: {
                    Authorization: idusuarios
                }
            });
            alert(`Lista criada com Sucesso.`);
            history.push('/listas');
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
                <h2>Cadastrar Nova Lista</h2>
                <form onSubmit={handleCadastrar}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                    <button className="botao" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}