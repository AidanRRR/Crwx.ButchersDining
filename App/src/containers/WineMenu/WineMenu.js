import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

import styles from './Styles.js';

export default class TypeMenu extends React.Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftNavbar}>
                    <View style={{ marginBottom: 40 }}>
                        <Text style={styles.leftNavbarText}>
                            TERUG
                        </Text>
                    </View>
                    <Text style={styles.leftNavbarText}>
                        WIT
                    </Text>
                    <Text style={styles.leftNavbarText}>
                        ROSÉ
                    </Text>
                    <Text style={styles.leftNavbarText}>
                        ROOD
                    </Text>
                </View>
                <View style={styles.mainArea}>
                    <View style={styles.topNavbar}>
                        <Text style={styles.topNavbarTextFirst}>BY THE GLASS</Text>
                        <Text style={styles.topNavbarText}>BOTTLES</Text>
                        <Text style={styles.topNavbarText}>THE BUTCHER'S BASEMENT</Text>
                    </View>
                    <View style={styles.wineList}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListTitleText}>WIT</Text>
                        </View>
                        <View>
                            <View style={styles.ListItem}>
                                <View style={styles.ItemTitleDescPrice}>
                                    <Text style={styles.ItemTitle}>Sauvignon de Touraine</Text>
                                    <Text style={styles.TitleSeperator}> * </Text>
                                    <Text style={styles.ItemRegion}>Domaine de Corbillières, Loire 2017</Text>
                                </View>
                                <View style={styles.ListItemPrice}>
                                    <Text style={styles.ItemPrice}>5,50</Text>
                                </View>
                                <View>
                                    <View>
                                        <Text style={styles.ItemType}>Sauvignon</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.ItemDescription}>Onweerstaanbaar drinkplezier uit de Loire: energiek, firs en loepzuiver.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    navigateToMenu = (menu) => {
        this.props.navigation.navigate(menu);
    }
}