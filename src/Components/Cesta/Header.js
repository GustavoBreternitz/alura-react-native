import React, { Fragment } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
import StyledText from './StyledText';
import topo from '../../../assets/topo.png'

/*
Nesse caso acima, o react está sendo importado sem chaves em quanto o
text está com chaves, isso acontece pois em um único arquivo você pode ter
diversos componentes, se você quiser chamar algum específico, você usa as chaves
caso queira usar o padrão do arquivo você não precisa delas
 */
const width = Dimensions.get("screen").width;
export default function Header({children}) {
    return (
        <Fragment>
            <Image source={topo} style={styles.top}/>
            <StyledText style={styles.topText}>{children}</StyledText>
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
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    }
})