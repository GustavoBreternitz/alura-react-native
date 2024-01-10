import react from "react";
import {StyleSheet, Text} from "react-native";

export default function StyledText({children, style}) {
    return (
        // aqui o ? no style?.fontWeight ele só passa para verificação caso o objeto exista
        <Text style={[style, style?.fontWeight == 'bold' ? styledtext.bold : styledtext.text]}>
            {children}
        </Text>
    );
}

const styledtext = new StyleSheet.create({
    text: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    bold: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})