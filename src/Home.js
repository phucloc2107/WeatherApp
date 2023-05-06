import { Text, StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

export default function Home() {

    const [city, setCity] = useState('');

    const cities = [
        {
            name: '    Ho Chi Minh',
            image: require('../assets/images/image3.jpg')
        },
        {
            name: 'Vung Tau',
            image: require('../assets/images/image4.jpg')
        },
        {
            name: 'Da Lat',
            image: require('../assets/images/image5.jpg')
        },
        {
            name: 'Nha Trang',
            image: require('../assets/images/image6.jpg')
        },
        {
            name: 'Da Nang',
            image: require('../assets/images/image7.jpg')
        }
    ]

    return (
        <View>
            {/* Background Image */}
            <ImageBackground
                source={require('../assets/images/image2.jpg')}
                style={styles.imgBackground}
            />
            {/* Header */}
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Icon name='menu' size={46} color='white' />

                    <Image
                        source={require('../assets/images/user.jpg')}
                        style={styles.headerAvatar}
                    />
                </View>

                <View style={styles.contain}>
                    <Text style={styles.textTitle}>Hello SG</Text>
                    <Text style={styles.textSearch}>Search the city by the name</Text>

                    <View style={styles.searchView}>
                        <TextInput
                            value={city}
                            onChangeText={(val) => setCity(val)}
                            placeholder='Search City'
                            placeholderTextColor='white'
                            style={styles.input} />

                        <TouchableOpacity onPress={() => { }}>
                            <Icon name='search' size={22} color='white' />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.textLocation}>My Location</Text>
                    <FlatList
                        horizontal
                        data={cities}
                        renderItem={({ item }) => (
                            <Cards name={item.name} image={item.image} />
                        )}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    imgBackground: {
        height: deviceHeight,
        width: deviceWidth,
        opacity: 0.6,
        backgroundColor: 'black'
    },
    container: {
        position: 'absolute'
    },
    headerContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceWidth - 20
    },
    headerAvatar: {
        height: 46,
        width: 46,
        borderRadius: 50
    },
    contain: {
        paddingHorizontal: 20,
        marginTop: 100
    },
    textTitle: {
        fontSize: 40,
        color: 'white'
    },
    textSearch: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 16,
        paddingHorizontal: 10
    },
    input: {
        paddingHorizontal: 10,
        color: 'white',
        fontSize: 16
    },
    textLocation: {
        marginTop: 300,
        marginBottom: 20,
        fontSize: 25,
        color: "white",
        paddingHorizontal: 10
    }
})