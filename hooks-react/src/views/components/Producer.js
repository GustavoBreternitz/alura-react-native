import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Producer(data) {
    return (
        <View style={styles.shop_box}>
            <Image source={data.imagem} style={styles.shop_image} />
            <View style={styles.info}>
            <View>
                <Text style={styles.title}>{data.nome}</Text>
                <Text>{data.estrelas}</Text>
            </View>
            <Text style={styles.subtitle}>{data.distancia}</Text>
            </View>
        </View>
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