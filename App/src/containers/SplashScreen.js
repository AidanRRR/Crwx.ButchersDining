import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import SplashBg from '../../assets/splash_butcher.png';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={SplashBg} style={{ width: '100%', height: '100%' }}>
                <TouchableOpacity style={styles.textContainer} onPress={() => { }}>
                    <Text>ONTDEK DE WIJNEN</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    splash: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    textContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: '15%',

        backgroundColor: 'white',

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10
    }
});
