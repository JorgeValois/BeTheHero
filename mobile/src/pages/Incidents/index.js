import React, {useState, useEffect} from 'react';

import {Feather} from '@expo/vector-icons';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import logoImg from '../../assets/logo.png'
import api from '../../services/api';

function Incidents(){
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    function navigationToDetail(incident){
        navigation.navigate('Detail', {incident});
    }


    async function loadIncidents(){
        if(loading){
            return;
        }

        if(total>0 && incident.lenght == total){
            return;
        }

        try {
            setLoading(true);
            const response = await api.get('incidentList', {
                params : {page}
            });
            /* .then(res => {
                console.log("res.datas");
                console.log(res.data);
            }).catch(()=>{});
           */  
            
    
            setIncidents(... incidents, ...response.data);
            console.log("incidentd");
                console.log(incidents);
            setTotal(response.headers['x-total-count']);
            setPage(page+1);
            setLoading(false);
            
        } catch (error) {
            alert("não foi possivel carregar os incidentes!");
        }
        

       
    }

    useEffect(()=>{
        loadIncidents();
    }, incidents);

    return (
        <View style={style.container}>
             
            <View style={style.header}>
                <Image source={logoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>{total} caso(s).</Text>
                </Text>
            </View>

            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia!</Text>
            <FlatList style={style.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident})=>{
                    <View style={style.incident}>
                            <Text style={style.incidentProperty}>ONG</Text>
                            <Text style={style.incidentValue}>{incident.name}</Text>
                            
                            <Text style={style.incidentProperty}>CASO</Text>
                            <Text style={style.incidentValue}>{incident.title}</Text>
                            
                            <Text style={style.incidentProperty}>VALOR</Text>
                            <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
                            
                            <TouchableOpacity style={style.detailsButton} onPress={() => navigationToDetail(incident)}>
                                <Text style={style.detailsButtonText}>Ver mais Detalhes</Text>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </TouchableOpacity>
                    
                    </View>
                }} />
            
        </View>
    );
}

export default Incidents;