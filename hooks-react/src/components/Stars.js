import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Grey from '../../assets/estrelaCinza.png'
import Green from '../../assets/estrela.png'

export default function Stars({props}) {
    const [click, setClick] = useState(props.qtd)
    const styles = styleCreate(props.edit);

    const getStar = (index) => {
        if (index < click) {
            return Green;
        }
        return Grey;
    }

    const StarsRender = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => setClick(i + 1)} disabled={!props.edit}>
                    <Image source={getStar(i)} style={styles.stars} />
                </TouchableOpacity>
            );
        }

        return stars;   
    }
 
  
    return (
        <View style={styles.stars_box}>
            <StarsRender />
        </View>
    );
}

const styleCreate = (bigest) => {
    return StyleSheet.create({
        stars_box:{
            flexDirection: 'row'
        },
        stars: {
            width: bigest ? 36 : 15,
            height: bigest ? 36 : 15
        }
    })
}