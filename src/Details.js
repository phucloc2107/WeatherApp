import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';

export default function Details(props) {

    const [data, Setdata] = useState();
    const { name } = props.route.params;

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
        )
            .then(res => res.json())
            .then(res => Setdata(res))
            .catch(err => console.log(err));
    }, []);

    const Data = ({ title, value }) => <View style={styles.Data}>
        <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
        <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
    </View>

    return (
        <View>
            <View>
                {/* Background Image */}
                <ImageBackground
                    source={require('../assets/images/image2.jpg')}
                    style={styles.imgBackground}
                />
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerContainer}>
                        <Icon name='menu' size={46} color='white' />

                        <Image
                            source={require('../assets/images/user.jpg')}
                            style={styles.headerAvatar}
                        />
                    </View>

                    {
                        data ? (
                            <View style={styles.container}>
                                <View>
                                    <Text style={styles.cityName}>{name}</Text>
                                    <Text style={styles.Weather}> {data['weather'][0]['main']}</Text>
                                </View>

                                <Text style={styles.Temp}>
                                    {(data['main']['temp'] - 273).toFixed(0)}&deg; C
                                </Text>

                                <Text style={styles.detail}>Weather Details</Text>
                                <View style={{ width: deviceWidth - 60 }}>
                                    <Data value={data['wind']['speed']} title='Wind' />
                                    <Data value={data['main']['pressure']} title='Pressure' />
                                    <Data value={`${data['main']['humidity']}%`} title='Humidity' />
                                    <Data value={data['visibility']} title='Visibility' />
                                </View>
                            </View>
                        ) : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imgBackground: {
        height: deviceHeight,
        width: deviceWidth,
        opacity: 0.6,
        backgroundColor: 'black'
    },
    header: {
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
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: deviceHeight - 100
    },
    cityName: {
        color: 'white',
        fontSize: 40
    },
    Weather: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    Temp: {
        fontSize: 64,
        color: 'white',
        textAlign: 'center',
    },
    detail: {
        color: 'white',
        fontSize: 32
    },
    Data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    }
})