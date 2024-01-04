import react, { Fragment } from "react";
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';

export default function Price({children}) {
    return (
        <Fragment>
            <StyledText style={styles.price}>{children}</StyledText>
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