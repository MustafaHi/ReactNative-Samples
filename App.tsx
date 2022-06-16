import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './card';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cards}>
        <Text>Welcome to ReactNative Samples!</Text>
        <Card title="Sample 01" text="Welcome! click to get started." background={backgrounds.blue}/>
        <Card title="Sample 02" text="Welcome! click to get started." background={backgrounds.red}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const backgrounds = {
  red: {
    colors: ['#ffb199', '#ff0844'],
    // start: {x: 0, y: 1},
  },
  blue: {
    colors: ['#0093E9', '#80D0C7'],
    start: {x: -0.1, y: 0}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cards: {
    padding: 10,
  },
});
