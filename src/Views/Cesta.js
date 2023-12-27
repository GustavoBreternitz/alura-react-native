import React, { Fragment } from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'
/*
Nesse caso acima, o react está sendo importado sem chaves em quanto o
text está com chaves, isso acontece pois em um único arquivo você pode ter
diversos componentes, se você quiser chamar algum específico, você usa as chaves
caso queira usar o padrão do arquivo você não precisa delas
 */
const width = Dimensions.get("screen").width;
export default function Cesta() {
    return (
        <Fragment>
            <Image source={topo} style={styles.top}/>
            <Text style={styles.topText}>Detalhes da cesta</Text>
            <View style={styles.infoBox}>
                <Text style={styles.farmTitle}>Cesta de Verduras</Text>
                <View style={styles.farmInfo}>
                    <Image source={logo} style={styles.farmImage}/>
                    <Text style={styles.farmText}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.farmDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut ac neque porttitor ex maximus venenatis eget in tellus. 
                    Proin imperdiet vulputate lectus, a elementum magna mollis et.</Text>
                <Text style={styles.price}>R$ 40,00</Text>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578/768 * width,
    },
    topText: {
        width: "100%",
        textAlign: "center",
        position: "absolute",
        padding: 26,
        color: "white",
        fontFamily: "bold",
        fontSize: 16,
        lineHeight: 26
    },
    farmTitle: {
        lineHeight: 42,
        fontSize: 26,
        fontFamily: "bold"
    },
    infoBox: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    farmInfo: {
        paddingVertical: 12,
        // display: 'flex', - no react todos os elementos já vem com o display flex
        flexDirection: 'row'
    },
    farmImage: {
        width: 32,
        height: 32
    },
    farmText: {
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 12,
        fontFamily: "regular",
    },
    farmDesc: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    price: {
        marginTop: 10,
        color: "#2A9F85",
        lineHeight: 42,
        fontSize: 26,
        fontFamily: "bold",
    }
})