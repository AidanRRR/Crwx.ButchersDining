import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import SplashScreen from './src/containers/SplashScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SplashScreen></SplashScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
