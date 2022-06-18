import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet, PressableProps } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";


export default function Card({ title, text, background, target }: { title: string, text: string, target: string, background: LinearGradientProps } extends PressableProps) {
  type Route = StackScreenProps<RouteParam, 'Sample01'>;

  return (
    <LinearGradient {...background} style={s.container}>
      <View onTouchEnd={() => { Route.navigation.push('Sample01', {}) }}>
        <Text style={s.title}>Card: {title}</Text>
        <Text style={s.text}>{text}</Text>
      </View>
    </LinearGradient>
  );
}

const s = StyleSheet.create({
  container: {
    height: 140,
    marginBottom: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: '600',
    margin: 22
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Inter',
    fontWeight: '400',
    letterSpacing: 1,
    marginLeft: 22
  }
});
