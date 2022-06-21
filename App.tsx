//| MustafaHi - ReactNative Samples
//| https://github.com/MustafaHi/ReactNative-Samples

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Card from './card';
import LoginSample from './samples/login/Main';
import GallerySample from './samples/gallery/Main';
import LargeGallerySample from './samples/list/Main';

const Route = createStackNavigator<RouteParam>();

function Main({navigation, route}: StackScreenProps<RouteParam, 'Main'>) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardTable}>
        <Text style={{marginVertical: 20}}>Welcome to ReactNative Samples!</Text>
        <Card title="Login Screen" text="Welcome! click to get started." background={backgrounds.blue}
              onPress={() => { navigation.push('LoginSample', {}); }}/>
        <Card title="Gallery" text="Welcome! click to get started." background={backgrounds.red}
              onPress={() => { navigation.push('GallerySample', {}); }}/>
        <Card title="Large Gallery" text="Welcome! click to get started." background={backgrounds.cyan}
              onPress={() => { navigation.push('LargeGallerySample', {}); }}/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Route.Navigator>
        {/* `name` of route as defined in `index.d.ts`: `RouteParam`
             it also define the title of the page! */}
        <Route.Screen name='Main' component={Main}/>
        <Route.Screen name='LoginSample' options={{title: "RN-Samples: Login"}} component={LoginSample}/>
        <Route.Screen name='GallerySample' options={{title: "RN-Samples: Gallery"}} component={GallerySample}/>
        <Route.Screen name='LargeGallerySample' options={{title: "RN-Samples: Large Gallery"}} component={LargeGallerySample}/>
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
