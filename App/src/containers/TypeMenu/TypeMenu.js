import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

import ByTheGlass from '../../../assets/TypeMenu/by_the_glass.png';
import Bottles from '../../../assets/TypeMenu/bottles.png';
import ButchersBasement from '../../../assets/TypeMenu/butchers_basement.png';

import styles from './Styles.js';

export default class TypeMenu extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.menuItem}>
                    <ImageBackground source={ByTheGlass} style={{ width: '100%', height: '100%' }}>
                        <TouchableWithoutFeedback style={styles.touchableItem} onPress={() => {
                            this.navigateToMenu('WineMenu', 'By the glass');
                        }}>
                            <View style={styles.menuItemView}>
                                <Text style={styles.menuItemHeader}>
                                    {`By the
                                    glass`}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </View>
                <View style={styles.menuItem}>
                    <ImageBackground source={Bottles} style={{ width: '100%', height: '100%' }}>
                        <TouchableWithoutFeedback style={styles.touchableItem} onPress={() => {
                            this.navigateToMenu('WineMenu', 'Bottles');
                        }}>
                            <View style={styles.menuItemView}>
                                <Text style={styles.menuItemHeader}>
                                    {`Bottles`}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </View>
                <View style={styles.menuItem}>
                    <ImageBackground source={ButchersBasement} style={{ width: '100%', height: '100%' }}>
                        <TouchableWithoutFeedback style={styles.touchableItem} onPress={() => {
                            this.navigateToMenu('WineMenu', 'The butcher\'s basement');
                        }}>
                            <View style={styles.menuItemView}>
                                <Text style={styles.menuItemHeader}>
                                    {`The butcher's
                                    basement`}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </View>
            </View>
        );
    }

    navigateToMenu = (menu, selection) => {
        this.props.navigation.navigate(menu, { selection });
    }
}