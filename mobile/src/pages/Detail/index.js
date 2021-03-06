import React from 'react';

import {Feather} from '@expo/vector-icons';
import {View, TouchableOpacity, Text, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import style from './style';
import logoImg from '../../assets/logo.png'

function Detail(){
    const route = useRoute();
    const incident = route.params.incident;
    const navigation = useNavigation();
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do Caso: ${incident.title}`,
            recipients: ['jorgeafvalois@gmail.com', `${incident.email}`],
            body: message,

        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={16} color="E02041"/>
                </TouchableOpacity>
            </View>

            <View style={style.incident}>
                <Text style={style.incidentProperty, {marginTop:0}}>ONG</Text>
                <Text style={style.incidentValue}>{incident.name} de {incident.city}, {incident.uf}</Text>
                
                <Text style={style.incidentProperty}>CASO</Text>
                <Text style={style.incidentValue}>{incident.description}</Text>
                
                <Text style={style.incidentProperty}>VALOR</Text>
                <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o Herói desse Caso.</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>

                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsapp }>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
                

            </View>

        </View>
    );
}

export default Detail;