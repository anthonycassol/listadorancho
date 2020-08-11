import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff, FaTrashAlt } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function Listas() {
    const [listas, setListas] = useState([]);

    const history = useHistory();

    const idusuarios = localStorage.getItem('idusuarios');
    const nome = localStorage.getItem('nome');

    useEffect(() => {
        api.get('listas', {
            headers: {
                Authorization: idusuarios,
            }
        }).then(response => {
            setListas(response.data.rows);
        })
    }, [idusuarios]);

    async function handleDeletarLista(idlistas) {
        try{
            await api.put(`listas/${idlistas}`, {
                headers: {
                    Authorization: idusuarios
                }
            });

            setListas(listas.filter(lista => lista.idlistas !== idlistas))
        } catch{
            alert('Erro ao deletar Lista. Tente novamente.');
        }
    }

    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }

    function handleLinkLista (idlistas){
        localStorage.setItem('lista', idlistas);
        history.push(`/produtos`);
    }

    return (
        <div className="listas-container">
            <header>
                <img src={logoImg} alt="Lista do Rancho" width="100"/>
                <span>Seja Bem Vindo, {nome}</span>

                <Link className="botao" to="/novo">Cadastrar Lista</Link>
                <button onClick={handleLogout} type="button">
                    <FaPowerOff size={18} color="#164897"/>
                </button>
            </header>

            <h1>Listas Ativas</h1>

            <ul>
            {listas.map( lista => ( 
                <li key={lista.idlistas} onClick={() => handleLinkLista(lista.idlistas)}>
                    <strong>LISTA: </strong>
                    <p>{lista.nome}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{lista.descricao}</p>

                    <button 
                        onClick={(e) => {e.stopPropagation(); handleDeletarLista(lista.idlistas)}} 
                        type="button">
                        <FaTrashAlt size={20} color="red"></FaTrashAlt>
                    </button>
                </li>
            ) )}
            </ul>
        </div>
    );
}