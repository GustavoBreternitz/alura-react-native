import React, { useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../components/Stars";

export default function Producer(data) {

    // o useReducer, aceita uma função como primeiro parametro, essa função recebe um estado e uma ação, com isso podemos passar a 
    // responsabilidade do setEdit para a função que é o primeiro parametro do reducer * é a mesma coisa que o useState
    const [edit, setEdit] = useReducer((edit, action) => {return !edit;}, false)

    return (
        <TouchableOpacity style={styles.shop_box} onPress={setEdit}>
            <Image source={data.imagem} style={styles.shop_image} />
            <View style={styles.info}>
            <View>
                <Text style={styles.title}>{data.nome}</Text>
                <Stars props={{qtd: data.estrelas, edit: edit}}/>
            </View>
            <Text style={styles.subtitle}>{data.distancia}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shop_box: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
  
        // Android
        elevation: 4,
  
        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    shop_image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    title: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        lineHeight: 19,
    },
  });