import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Card from './card';
import Sample01 from './samples/sample01/Main';
// import Sample01 from './samples/sample02/Main';

const Route = createStackNavigator<RouteParam>();

function Main({navigation, route}: StackScreenProps<RouteParam, 'Main'>) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardTable}>
        <Text style={{marginVertical: 20}}>Welcome to ReactNative Samples!</Text>
        <Card title="Sample 01" text="Welcome! click to get started." background={backgrounds.blue}
              onPress={() => { navigation.push('Sample01', {}); }}/>
        {/* <Card title="Sample 02" text="Welcome! click to get started." background={backgrounds.red}
              onPress={() => { navigation.push('Sample02', {}); }}/> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Route.Navigator>
        <Route.Screen name='Main' component={Main}/>
        <Route.Screen name='Sample01' component={Sample01}/>
      </Route.Navigator>
    </NavigationContainer>
  );
}


const backgrounds = {
  red: {
    colors: ['#ffb199', '#ff0844'],
  },
  cyan: {
    colors: ['#0093E9', '#80D0C7'],
    start: {x: -0.1, y: 0}
  },
  blue: {
    colors: ['#6b8cce', '#0c3483'],
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardTable: {
    padding: 10,
  },
});
