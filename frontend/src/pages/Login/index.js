import React from 'react';
import { Link } from 'react-router-dom'; //Para usar na troca de página (ao invés de usar a href usar link to)
import { FaSignInAlt } from 'react-icons/fa';

import './styles.css'

import logoImg from '../../img/loginicon.png';

import shoppingImg from '../../img/shopping.png';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Lista do Rancho" style={ {width: 150, marginLeft: 85} }/>
                
                <form>
                    <h1>Faça seu Login</h1>

                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
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