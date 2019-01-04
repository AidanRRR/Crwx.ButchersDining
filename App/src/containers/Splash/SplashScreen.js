import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import SplashBg from '../../../assets/splashscreen.jpg';
import { AsyncStorage } from "react-native"

import styles from './Styles.js';

export default class SplashScreen extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    state = {
        fontLoaded: false
    }

    async componentDidMount() {
        await Font.loadAsync({
            'microbrew-soft-one': require('./../../../assets/fonts/Microbrew-Soft-Four.otf'),
            'minionpro-Medium': require('./../../../assets/fonts/MinionPro-Medium.otf'),
            'minionpro-Bold': require('./../../../assets/fonts/MinionPro-Bold.otf')
        });

        const response = await fetch('https://raw.githubusercontent.com/AidanRRR/Crwx.ButchersDining/master/App/src/containers/WineMenu/Data.json')
        const json = await response.json();

        await AsyncStorage.setItem('wines', JSON.stringify(json));

        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            this.state.fontLoaded ? (
                <View>
                    <StatusBar hidden={true} />
                    <ImageBackground source={SplashBg} style={{ width: '100%', height: '100%' }}>
                        <TouchableOpacity style={styles.textContainer}
                            underlayColor={'gray'}
                            onPress={() => this.navigateToMenu('TypeMenu')}>
                            <Text style={styles.button}>ONTDEK DE WIJNEN</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View >
            ) : null
        );
    }

    navigateToMenu = (menu) => {
        this.props.navigation.navigate(menu);
    }
}