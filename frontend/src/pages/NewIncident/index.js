import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';

import './style.css';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try {
             const response = await api.post('incident',data,{
                headers : {
                    Authorization: ongId,   
                }
            });
            alert(`Icidente criado com sucesso! \n número ${response.data.id}`);
            history.push('/profile');
        } catch (error) {
            alert('Não foi possivel criar o incidente!');
        }
    }

    return (
        <div className="newIncidentContainer">
        
        <div className="content">
            <section>
                 <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um Herói para resolver isso.</p>
                <Link to="/profile" className="backLink"><FiArrowLeft size="16"  color="#E02041 "/>Voltar para home</Link>
            </section>

            <form onSubmit={handleNewIncident}>

                <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do Caso" />
                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
                <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em R$" />

                

                <button className="button" type="submit">Cadastrar</button>
                
            </form>
        </div>
    </div>
    );
}

export default NewIncident;