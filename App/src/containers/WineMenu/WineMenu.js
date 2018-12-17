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
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text>Test</Text>
            </View>
        );
    }

    navigateToMenu = (menu) => {
        this.props.navigation.navigate(menu);
    }
}