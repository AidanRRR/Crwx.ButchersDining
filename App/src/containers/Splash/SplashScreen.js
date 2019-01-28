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
        fontsLoaded: false,
        winesLoaded: false
    }

    load = async () => {
        await this.tryUpdatingApp();
        await this.loadWines();
    }

    tryUpdatingApp = async () => {
        try {
            const update = await Expo.Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                await Expo.Updates.fetchUpdateAsync();
                Expo.Updates.reloadFromCache();
            }
        } catch (e) { }
    }

    loadWines = async () => {
        const response = await fetch('https://raw.githubusercontent.com/AidanRRR/Crwx.ButchersDining/master/App/src/containers/WineMenu/Data.json')
        const json = await response.json();

        await AsyncStorage.setItem('wines', JSON.stringify(json));

        this.setState({ winesLoaded: true });
    }

    loadFonts = async () => {
        await Font.loadAsync({
            'Microbrew-Soft-Five-Fill': require('../../../assets/fonts/Microbrew-Soft-Five-Fill.otf'),
            'Microbrew-Soft-Four': require('../../../assets/fonts/Microbrew-Soft-Four.otf'),
            'Microbrew-Soft-One': require('../../../assets/fonts/Microbrew-Soft-One.otf'),
            'MinionPro-Bold': require('../../../assets/fonts/MinionPro-Bold.otf'),
            'MinionPro-BoldIt': require('../../../assets/fonts/MinionPro-BoldIt.otf'),
            'MinionPro-It': require('../../../assets/fonts/MinionPro-It.otf'),
            'MinionPro-Medium': require('../../../assets/fonts/MinionPro-Medium.otf'),
        });

        this.setState({ fontsLoaded: true });
    }

    componentDidMount = async () => {
        await this.tryUpdatingApp();
        await this.loadWines();
        await this.loadFonts();

        this.props.navigation.addListener('willFocus', this.load);
    }

    render() {
        return (
            this.state.fontsLoaded && this.state.winesLoaded && (
                <View>
                    <StatusBar hidden={true} />
                    <ImageBackground source={SplashBg} style={{ width: '100%', height: '100%' }}>
                        <TouchableOpacity style={styles.textContainer}
                            underlayColor={'gray'}
                            onPress={() => this.navigateToMenu('TypeMenu')}>
                            <Text style={styles.button}>ENTER WINE CAVE</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View >
            )
        );
    }

    navigateToMenu = (menu) => {
        this.props.navigation.navigate(menu);
    }
}