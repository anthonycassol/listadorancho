import React from 'react';
import {FaSignInAlt} from 'react-icons/fa';

import './styles.css'

import logoImg from '../../img/loginicon.png';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>
            </section>

            <form>
                <h1>Faça seu Login</h1>

                <input type="text" placeholder="Seu Email"/>
                <input type="password"/>

                <a href="registrar">
                    <FaSignInAlt size={16} color="#E02041"/>
                    Não tenho cadastro
                </a>
            </form>
        </div>
    );
}