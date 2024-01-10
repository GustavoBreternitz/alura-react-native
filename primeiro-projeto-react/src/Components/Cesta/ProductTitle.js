import react from "react";
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';

export default function ProductTitle({children}) {
    return (
        <StyledText style={styles.farmTitle}>{children}</StyledText>
    );
}


const styles = StyleSheet.create({
    farmTitle: {
        lineHeight: 42,
        fontSize: 26,
        fontWeight: 'bold'
    }
})