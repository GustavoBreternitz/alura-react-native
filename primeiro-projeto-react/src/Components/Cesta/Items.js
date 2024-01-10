import React, { Fragment } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import StyledText from './StyledText';
import tomate from "../../../assets/frutas/Tomate.png";
import { FlatList } from 'react-native';

export default function Items() {
    const items = [{
        nome: "Tomate",
        image: tomate
    }];

    const renderItems = ({item}) => {
        return (
            <View style={styles.viewItems}>
                <Image source={item.image} style={styles.image}/>
                <StyledText style={styles.text}>{item.nome}</StyledText>
            </View>
        );
    }

    return (
        <Fragment>
            <StyledText style={styles.title}>Itens da cesta</StyledText>
            <FlatList data={items} renderItem={renderItems}></FlatList>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        color: "#464646"
    },
    image: {
        width: 46,
        height: 46
    },
    viewItems: {
        flexDirection: "row",
        paddingVertical: 16,
        alignItems: "center"
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    }
})