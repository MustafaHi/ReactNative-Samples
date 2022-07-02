import { useState, useCallback } from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { Text, StyleSheet, Pressable } from "react-native";
import { Throttle } from "./utils";
import { useNavigation } from "@react-navigation/native";

export default function Card({ background, title, text, target }: { target: string, title: string, text: string, background: LinearGradientProps }) {
  // const onPressed = useCallback(
  //   Throttle(onPress, 500), []
  // );
  const navigation = useNavigation();
  return (
    <LinearGradient {...background} style={s.container}>
      {/* Require throttle to prevent user from triggering the event multiple times
          in quick sessions and in this case diving into multiple pages! */}
      <Pressable style={{height: '100%'}} onPress={Throttle(() => navigation.navigate(target, {}), 500)}>
        <Text style={s.title}>{title}</Text>
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
    fontFamily: 'Inter_500Medium',
    margin: 22
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Inter_400Regular',
    letterSpacing: 1,
    marginHorizontal: 22
  }
});
