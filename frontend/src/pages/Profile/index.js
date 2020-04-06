import React, {useEffect,useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg'

function Profile(){
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers : {
                Authorization: ongId,   
            }
        }).then(response => {
            setIncidents(response.data);
        }, [ongId])
    }, [ongId]);
        
    async function handleDeleteIncident(id){
        try {
            await api.delete(`/incident/${id}`,{
                headers: {
                    Authorization: ongId,
            }
        });
        setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (err) {
            alert('Erro ao deletar caso!');
            
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
    <div className="profileContainer">
        
            <header>
                 <img src={logoImg} alt="Be The Hero" />
                <span>Bem-Vinda, {ongName}</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout}><FiPower size="18" color="#E02041"/></button>
            </header>

            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident =>(
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id) }><FiTrash2 size="20" color="#A8A8B3"/></button>
                    </li>
                ))}

            </ul>

            <form>

                
                
            </form>
    </div> 
    );
} 

export default Profile;