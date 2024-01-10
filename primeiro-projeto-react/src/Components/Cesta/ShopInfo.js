import react from "react";
import { Image, StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import logo from '../../../assets/logo.png'

export default function ShopInfo({children}) {
    return (
        <View style={styles.farmInfo}>
            <Image source={logo} style={styles.farmImage}/>
            <StyledText style={styles.farmText}>{children}</StyledText>
        </View>
    );
}


const styles = StyleSheet.create({
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
    }
})