import react, { Fragment } from "react";
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';
import Price from "./Price";

export default function ProductInfo({children}) {
    return (
        <Fragment>
            <StyledText style={styles.farmDesc}>{children}</StyledText>
            <Price>R$ 40,00</Price>
        </Fragment>
    );
}


const styles = StyleSheet.create({
    price: {
        marginTop: 10,
        color: "#2A9F85",
        lineHeight: 42,
        fontSize: 26,
        fontWeight: 'bold'
    }
})