import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //Para usar na troca de página (ao invés de usar a href usar link to)
import { FaSignInAlt } from 'react-icons/fa';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../img/loginicon.png';

import shoppingImg from '../../img/shopping.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        const dados = ({
            email,
            senha
        })

        try{
            const resposta = await api.post('session', dados);

            localStorage.setItem('idusuarios', resposta.data.rows[0].idusuarios);
            localStorage.setItem('nome', resposta.data.rows[0].nome);
            

            history.push('/listas');
        } catch (err){
            alert('Falha no Login, tente novamente.');
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Lista do Rancho" style={ {width: 150, marginLeft: 85} }/>
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

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
                    <button className="botao" type="submit">Entrar</button>

                    <Link className="voltar-link" to="registrar"> 
                        <FaSignInAlt size={16}/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={shoppingImg} alt="Lista do Rancho" />
            
        </div>
    );
}