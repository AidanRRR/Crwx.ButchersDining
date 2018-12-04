import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import SplashScreen from './src/containers/Splash/SplashScreen';
import TypeMenu from './src/containers/TypeMenu/TypeMenu';

class App extends React.Component {
  render() {
    return {}
  }
}

const AppNavigator = createStackNavigator({
  Home: SplashScreen,
  TypeMenu: TypeMenu
});

export default createAppContainer(AppNavigator);