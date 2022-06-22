//| MustafaHi - ReactNative Samples
//| https://github.com/MustafaHi/ReactNative-Samples

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';

import Card from './card';
import LoginSample from './samples/login/Main';
import GallerySample from './samples/gallery/Main';
import LargeGallerySample from './samples/list/Main';
import IntroSample from './samples/intro/Main';

const Route = createStackNavigator<RouteParam>();

function Main({navigation, route}: StackScreenProps<RouteParam, 'Main'>) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardTable}>
        <Text style={{marginVertical: 20}}>Welcome to ReactNative Samples!</Text>
        <Card title="Login Screen" text="Welcome! click to get started." background={backgrounds.blue}
              target="LoginSample"/>
        <Card title="Gallery" text="Welcome! click to get started." background={backgrounds.red}
              target="GallerySample"/>
        <Card title="Large Gallery" text="Welcome! click to get started." background={backgrounds.black}
              target="LargeGallerySample"/>
        <Card title="Intro Screen" text="Welcome! click to get started." background={backgrounds.cyan}
              target="IntroSample"/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {

  const [ready, setReady] = useState(false);

  //| Actions to be done before hiding the SplashScreen
  //| = load required fonts
  useEffect(() => { (async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
          Inter_600SemiBold,
        });
    } catch (e)
    {
      console.warn(e);
    } finally
    {
      setReady(true);
    }
  })()}, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (ready)
      await SplashScreen.hideAsync();
  }, [ready]);

  if (!ready)
    return null;
  
  
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Route.Navigator>
        {/* `name` of route as defined in `index.d.ts`: `RouteParam`
             it also define the title of the page, unless defined in options! */}
        <Route.Screen name='Main' component={Main}/>
        <Route.Screen name='LoginSample' options={{title: "RN-Samples: Login"}} component={LoginSample}/>
        <Route.Screen name='GallerySample' options={{title: "RN-Samples: Gallery"}} component={GallerySample}/>
        <Route.Screen name='LargeGallerySample' options={{title: "RN-Samples: Large Gallery"}} component={LargeGallerySample}/>
        <Route.Screen name='IntroSample' options={{title: "RN-Samples: Intro Screen"}} component={IntroSample}/>
      </Route.Navigator>
    </NavigationContainer>
  );
}


const backgrounds = {
  red: {
    colors: ['#ffb199', '#ff0844'],
  },
  cyan: {
    colors: ['#80D0C7', '#0093E9'],
    start: {x: -0.1, y: -0.1}
  },
  blue: {
    colors: ['#6b8cce', '#0c3483'],
  },
  black: {
    colors: ['#434343', 'black']
  }
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

