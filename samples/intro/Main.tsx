//| MustafaHi - ReactNative Samples - Intro
//| https://github.com/MustafaHi/ReactNative-Samples/

import { useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from "react-native"
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RouteParam, 'IntroSample'>

export default function IntroSample({ navigation, route }: Props) {

  return (
    <View style={s.container}>
      <View style={s.slides}>
        <ImageBackground 
        source={require("../../assets/1.png")}
        resizeMode="center"
        style={s.background}>
          <View style={s.info}>
            <Text style={s.title}>1st to the show</Text>
            <Text style={s.text}>You get premium ticket entry.</Text>
          </View>
        </ImageBackground>
        <ImageBackground 
        source={require("../../assets/2.png")}
        resizeMode="center"
        style={s.background}>
          <View style={s.info}>
            <Text style={s.title}>2nd to the show</Text>
            <Text style={s.text}>Better hurry up to get in!</Text>
          </View>
        </ImageBackground>
        <ImageBackground 
        source={require("../../assets/3.png")}
        resizeMode="center"
        style={s.background}>
          <View style={s.info}>
            <Text style={s.title}>3rd to the show</Text>
            <Text style={s.text}>Are you sure you want to get in?!</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={s.dots}>
        <View style={s.empty}></View>
        <View style={s.filled}></View>
        <View style={s.empty}></View>
      </View>
    </View>
  );
  
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  slides: {
    height: '90%',
    flexDirection: "row",
    transform: [{translateX: -Dimensions.get('window').width*0}],
  },
  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  empty: {
    height: 16,
    width: 16,
    marginHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#FF368A',
  },
  filled: {
    height: 16,
    width: 26,
    borderRadius: 16,
    backgroundColor: '#3680FF',
  },
  background: {
    height: '90%',
    width: '100%',
  },
  info: {
    marginTop: '100%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Inter_500Medium',
    textAlign: 'center',
    color: '#444',
    // backgroundColor: 'rgba(54, 128, 255, 0.14)',
  }
});

