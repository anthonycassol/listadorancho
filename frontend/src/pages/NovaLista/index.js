import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../img/loginicon.png';

export default function Registrar() {
    const [nome, setNome] = useState('');
    const [descricao, setSobrenome] = useState('');

    const history = useHistory();

    const idusuarios = localStorage.getItem('idusuarios');
    

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

    return (
        <div className="form-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Lista do Rancho" style={{ width: 150}}/>

                    <h1>Nova Lista</h1>
                    <p>Crie uma nova lista de compras</p>
                    
                    <Link className="voltar-link" to="/listas">
                        <FaArrowLeft size={16}/>
                        Voltar para o início
                    </Link>
                </section>
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
                    <button className="botao" type="submit">Cadastrar Nova Lista</button>
                </form>
            </div>
        </div>
    );
}