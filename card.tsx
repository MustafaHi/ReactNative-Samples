import { useState, useCallback } from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { Text, StyleSheet, Pressable } from "react-native";
import { Throttle } from "./utils";

export default function Card({ background, onPress, title, text  }: { title: string, text: string, onPress: Function, background: LinearGradientProps }) {
  // const onPressed = useCallback(
  //   Throttle(onPress, 500), []
  // );
  return (
    <LinearGradient {...background} style={s.container}>
      {/* <Pressable style={{height: '100%'}} onPress={() => onPressed()}> */}
      <Pressable style={{height: '100%'}} onPress={Throttle(onPress, 500)}>
        <Text style={s.title}>Card: {title}</Text>
        <Text style={s.text}>{text}</Text>
      </Pressable>
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
