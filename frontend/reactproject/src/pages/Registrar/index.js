import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function Registrar() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();
    

    async function handleRegistro(e){
        e.preventDefault();

        const dados = ({
            nome,
            sobrenome,
            email,
            senha
        })

        try{
            const resposta = await api.post('usuario', dados);
            alert(`Usuário cadastrado com sucesso, Olá ${resposta.data.nome}`);
            history.push('/');
        }catch (err){
            alert('Erro, tente novamente');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Lista do Rancho" style={ {width: 150, marginLeft: 97} }/>
                <form onSubmit={handleRegistro}>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e nunca mais fique sem papel higiênico na hora de fazer o 2</p>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={nome}
                        required
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Sobrenome"
                        required
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        required
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="botao" type="submit">Cadastrar</button>

                    <Link className="voltar-link" to="/">
                        <FaArrowLeft size={16}/>
                        Voltar para a tela inicial
                    </Link>
                </form>
            </section>
        </div>
    );
}