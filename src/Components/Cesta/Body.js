import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductTitle from './ProductTitle';
import ShopInfo from './ShopInfo';
import ProductInfo from './ProductInfo'; 
import { TouchableOpacity } from 'react-native';
import StyledText from './StyledText';
import Button from './Button';
import Items from './Items';

export default function Body() {
    return (
        <View style={styles.infoBox}>
            <ProductTitle>Cesta de Verduras</ProductTitle>
            <ShopInfo>Jenny Jack Farm</ShopInfo>
            <ProductInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ProductInfo>
            <Button>Comprar</Button>
            <Items />
        </View>
    );
}

const styles = StyleSheet.create({
    infoBox: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    }
})