import React, { useEffect, useState} from 'react'
import { Image, StyleSheet, View, Text } from "react-native";
import Logo from "../../../assets/logo.png";
import users from '../../mocks/users';

export default function Top() {
    // aqui estamos controlando um estado de uma variavel qlq, por exemplo, ali é a variavel nmuser, e a função que serve como setter
    // é a nmuser, assim quando quisermos mudar o valor dela a qlq momento é só chamar a função setNmuser(valor desejado)
    const [nmuser, setNmuser] = useState('usuário')
    
    useEffect(() => {
        setNmuser(users.nome);
    }, [])
    return (
    <View style={styles.top}>
        <View>
            <Image source={Logo} style={styles.image_top}/>
        </View>       
        <View>
            <Text style={styles.title}>Olá {nmuser}</Text>
            <Text style={styles.sub_title}>Encontre os melhores produtores</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    top: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    image_top: {
        width: 70,
        height: 28
    },
    title: {
        fontSize: 26,
        marginTop: 24,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    sub_title: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 16
    }
})