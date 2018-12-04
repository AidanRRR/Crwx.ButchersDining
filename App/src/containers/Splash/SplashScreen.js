import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import SplashBg from '../../../assets/splash_butcher.png';

import styles from './Styles.js';

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                <ImageBackground source={SplashBg} style={{ width: '100%', height: '100%' }}>
                    <TouchableOpacity style={styles.textContainer} onPress={() => this.navigateToMenu('TypeMenu')}>
                        <Text>ONTDEK DE WIJNEN</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }

    navigateToMenu = (menu) => {
        this.props.navigation.navigate(menu);
    }
}