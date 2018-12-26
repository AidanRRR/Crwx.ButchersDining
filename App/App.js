import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './src/containers/Splash/SplashScreen';
import TypeMenu from './src/containers/TypeMenu/TypeMenu';
import WineMenu from './src/containers/WineMenu/WineMenu';

class App extends React.Component {
}

const AppNavigator = createStackNavigator({
  // Home: WineMenu,

  Home: SplashScreen,
  TypeMenu: TypeMenu,
  WineMenu: WineMenu
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;