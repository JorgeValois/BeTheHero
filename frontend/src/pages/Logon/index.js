import React, {useState} from 'react';

import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import {FiLogIn} from 'react-icons/fi';
import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    
    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions',{id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile')
        } catch (err) {
            alert('Falha no Login, tente novamente!');
        }
    }

    return (
    <div className="logonContainer">
        <section className="form">
            <img src={logoImg} alt="Be The Hero"/>
            <form onSubmit={handleLogin}>
                <h1>Faça seu Logon</h1>
                <input value={id} onChange={e => setId(e.target.value)} placeholder="ID da ONG" />
                <button className="button" type="submit" >Entrar</button>
                <Link to="/register" className="backLink"><FiLogIn size="16"  color="#E02041 "/> Não tenho Cadastro</Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
    </div> 
    );
} 

export default Logon;