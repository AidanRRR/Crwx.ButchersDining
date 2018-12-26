import React from 'react';
import {
    StyleSheet, Text, View, ImageBackground, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView
} from 'react-native';
import styles from './Styles.js';

import Data from './Data.json';

export default class TypeMenu extends React.Component {
    state = {
        selection: {
            sizeType: 'BY THE GLASS',
            wineType: 'WIT'
        },
        displayData: Data.sizeType[0].wineTypes[0]
    }

    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    };

    changeWineType = (id) => {
        this.setState({
            selection: {
                sizeType: this.state.selection.sizeType,
                wineType: id
            },
            loading: true
        }, this.updateFilters);
    }
    changeSizeType = (id) => {
        this.setState({
            selection: {
                sizeType: id,
                wineType: this.state.selection.wineType
            },
            loading: true
        }, this.updateFilters);
    }

    updateFilters = async () => {
        const { selection } = this.state;

        let filtered;

        // Apply sizeType filter
        filtered = Data.sizeType.filter((sizeType) => {
            return (sizeType.type.toUpperCase() === selection.sizeType.toUpperCase());
        });

        // Apply winetype filter
        if (selection.wineType !== null) {
            filtered = filtered[0].wineTypes.filter((wineType) => {
                return (wineType.name.toUpperCase() === selection.wineType.toUpperCase());
            })
        };

        await this.setState({ displayData: filtered[0], loading: false });
    }

    handleBack = () => { }

    render() {
        const { selection, displayData, loading } = this.state;

        const byTheGlass = selection.sizeType.toUpperCase() === 'BY THE GLASS'.toUpperCase();
        const bottles = selection.sizeType.toUpperCase() === 'BOTTLES'.toUpperCase();
        const butchersBasement = selection.sizeType.toUpperCase() === 'THE BUTCHER\'S BASEMENT'.toUpperCase();

        if (loading) {
            return (<Text>Loading</Text>)
        } else {
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
                        {byTheGlass && (
                            <View>
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
                        )}
                        {bottles && (
                            <View>
                                <TouchableOpacity onPress={() => { this.changeWineType('BUBBLES'); }}>
                                    {selection.wineType === 'BUBBLES' ?
                                        (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>BUBBLES</Text>) :
                                        (<Text style={[styles.leftNavbarText]}>BUBBLES</Text>)}
                                </TouchableOpacity>
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
                                <TouchableOpacity onPress={() => { this.changeWineType('ZOET'); }}>
                                    {selection.wineType === 'ZOET' ?
                                        (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>ZOET</Text>) :
                                        (<Text style={[styles.leftNavbarText]}>ZOET</Text>)}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.changeWineType('SPECIAL'); }}>
                                    {selection.wineType === 'SPECIAL' ?
                                        (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>SPECIAL</Text>) :
                                        (<Text style={[styles.leftNavbarText]}>SPECIAL</Text>)}
                                </TouchableOpacity>
                            </View>
                        )}
                        {butchersBasement && (
                            <View>
                                <TouchableOpacity onPress={() => { this.changeWineType('WIT'); }}>
                                    {selection.wineType === 'WIT' ?
                                        (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>WIT</Text>) :
                                        (<Text style={[styles.leftNavbarText]}>WIT</Text>)}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.changeWineType('ROOD'); }}>
                                    {selection.wineType === 'ROOD' ?
                                        (<Text style={[styles.leftNavbarText, styles.leftNavbarTextUnderline]}>ROOD</Text>) :
                                        (<Text style={[styles.leftNavbarText]}>ROOD</Text>)}
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                    <View style={styles.mainArea}>
                        <View style={styles.topNavbar}>
                            <TouchableOpacity onPress={() => { this.changeSizeType('BY THE GLASS'); }}>
                                {selection.sizeType === 'BY THE GLASS' ?
                                    (<Text style={[styles.topNavbarTextFirst, styles.topNavbarTextUnderline]}>BY THE GLASS</Text>) :
                                    (<Text style={[styles.topNavbarTextFirst]}>BY THE GLASS</Text>)}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.changeSizeType('BOTTLES'); }}>
                                {selection.sizeType === 'BOTTLES' ?
                                    (<Text style={[styles.topNavbarText, styles.topNavbarTextUnderline]}>BOTTLES</Text>) :
                                    (<Text style={[styles.topNavbarText]}>BOTTLES</Text>)}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.changeSizeType('THE BUTCHER\'S BASEMENT'); }}>
                                {selection.sizeType === 'THE BUTCHER\'S BASEMENT' ?
                                    (<Text style={[styles.topNavbarText, styles.topNavbarTextUnderline]}>THE BUTCHER'S BASEMENT</Text>) :
                                    (<Text style={[styles.topNavbarText]}>THE BUTCHER'S BASEMENT</Text>)}
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={styles.wineList}>
                            <View style={styles.ListTitle}>
                                <Text style={styles.ListTitleText}>
                                    {selection.wineType}
                                </Text>
                            </View>
                            <View>
                                {byTheGlass && (
                                    this.renderByTheGlass(displayData)
                                )}
                                {bottles && (
                                    this.renderBottles(displayData)
                                )}
                                {butchersBasement && (
                                    this.renderButchersBasement(displayData)
                                )}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }

    renderByTheGlass = (displayData) => {
        return (
            displayData.wines.map((wine, i) => {
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
            })
        )
    }
    renderBottles = (displayData) => {
        return (
            displayData.wines.map((country, i) => {
                return (
                    country.wines.map((wine, i) => {
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
                    })
                )
            })
        )
    }
    renderButchersBasement = (displayData) => {
        return (
            displayData.wines.map((wine, i) => {
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
            })
        )
    }

    navigateToMenu = (menu) => {
        this.props.navigation.navigate(menu);
    }
}