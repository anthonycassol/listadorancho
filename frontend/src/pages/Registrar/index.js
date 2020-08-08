import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function Registrar() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

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
        }
        catch (err){
            alert('Erro, tente novamente');
        }
    }

    return (
        <div className="registrar-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Lista do Rancho" style={{ width: 150}}/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e nunca mais fique sem papel higiênico na hora de fazer o 2</p>
                    
                    <Link className="voltar-link" to="/">
                        <FaArrowLeft size={16}/>
                        Voltar para a tela inicial
                    </Link>
                </section>
                <form onSubmit={handleRegistro}>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="botao" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}