import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './Styles.js';

import Data from './Data.json';

export default class TypeMenu extends React.Component {

    state = {
        selection: {
            glassType: 'BY THE GLASS',
            wineType: 'WIT'
        },
        displayData: Data.WineTypes[0].glassTypes[0]
    }

    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    changeWineType = (id) => {
        this.setState({
            selection: {
                glassType: this.state.selection.glassType,
                wineType: id
            }
        });
    }
    changeGlassType = (id) => {
        const { selection } = this.state;

        let filtered = Data.WineTypes.filter((wine) => {
            return (wine.name === selection.wineType);
        });

        filtered = filtered[0].glassTypes.filter((glassType) => {
            return (glassType.type.toUpperCase() === id.toUpperCase());
        });

        this.setState({
            selection: {
                glassType: id,
                wineType: this.state.selection.wineType
            },
            displayData: filtered[0]
        });
    }

    handleBack = () => { }

    render() {
        const { selection, displayData } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.leftNavbar}>
                    <View style={{ marginBottom: 40 }}>
                        <TouchableOpacity onPress={this.handleBack}>
                            <Text style={styles.leftNavbarText}>
                                TERUG
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { this.changeWineType('WIT'); }}>
                        {selection.wineType === 'WIT' ?
                            (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>WIT</Text>) :
                            (<Text style={[styles.leftNavbarText]}>WIT</Text>)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeWineType('ROSÉ'); }}>
                        {selection.wineType === 'ROSÉ' ?
                            (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>ROSÉ</Text>) :
                            (<Text style={[styles.leftNavbarText]}>ROSÉ</Text>)}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeWineType('ROOD'); }}>
                        {selection.wineType === 'ROOD' ?
                            (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>ROOD</Text>) :
                            (<Text style={[styles.leftNavbarText]}>ROOD</Text>)}
                    </TouchableOpacity>
                </View>
                <View style={styles.mainArea}>
                    <View style={styles.topNavbar}>
                        <TouchableOpacity onPress={() => { this.changeGlassType('BY THE GLASS'); }}>
                            {selection.glassType === 'BY THE GLASS' ?
                                (<Text style={[styles.topNavbarTextFirst, styles.topNavbarTextUnderline]}>BY THE GLASS</Text>) :
                                (<Text style={[styles.topNavbarTextFirst]}>BY THE GLASS</Text>)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.changeGlassType('BOTTLES'); }}>
                            {selection.glassType === 'BOTTLES' ?
                                (<Text style={[styles.topNavbarText, styles.topNavbarTextUnderline]}>BOTTLES</Text>) :
                                (<Text style={[styles.topNavbarText]}>BOTTLES</Text>)}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.changeGlassType('THE BUTCHER\'S BASEMENT'); }}>
                            {selection.glassType === 'THE BUTCHER\'S BASEMENT' ?
                                (<Text style={[styles.topNavbarText, styles.topNavbarTextUnderline]}>THE BUTCHER'S BASEMENT</Text>) :
                                (<Text style={[styles.topNavbarText]}>THE BUTCHER'S BASEMENT</Text>)}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wineList}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListTitleText}>
                                {selection.wineType}
                            </Text>
                        </View>
                        <View>
                            {displayData.wines.map((wine, i) => {
                                return (
                                    <View key={i} style={styles.ListItem}>
                                        <View style={styles.ItemTitleDescPrice}>
                                            <Text style={styles.ItemTitle}>{wine.title}</Text>
                                            <Text style={styles.TitleSeperator}> * </Text>
                                            <Text style={styles.ItemRegion}>{wine.region}</Text>
                                        </View>
                                        <View style={styles.ListItemPrice}>
                                            <Text style={styles.ItemPrice}>{wine.price}</Text>
                                        </View>
                                        <View>
                                            <View>
                                                <Text style={styles.ItemType}>{wine.region}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.ItemDescription}>{wine.description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            })}
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