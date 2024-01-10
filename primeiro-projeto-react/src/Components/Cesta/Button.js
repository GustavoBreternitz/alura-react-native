import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import StyledText from './StyledText';

export default function Button({children}) {
    return (
        <Fragment>
            <TouchableOpacity style={styles.button}>
                <StyledText style={styles.textButton}>{children}</StyledText>
            </TouchableOpacity>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        padding: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})