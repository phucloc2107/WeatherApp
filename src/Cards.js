import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function Cards({ name, image, navigation }) {
    return (
        <View>
            <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={() => navigation.navigate('Details', { name })}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                    imageStyle={{ borderRadius: 16 }}
                />

                <View style={styles.imageContain}>
                    <Text style={styles.imageTitle}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: deviceHeight / 5,
        width: deviceWidth / 2 - 50,
        opacity: 0.7
    },
    imageContain: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    imageTitle: {
        fontSize: 28,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        color: 'black',
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },
})