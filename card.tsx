import React, { Component } from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import {View, Text, Image, StyleSheet} from "react-native";

export default function Card(props: {title: string, text: string, background: LinearGradientProps}) {
    return (
        <LinearGradient {...props.background} style={s.container}>
            <Text style={s.title}>Card: {props.title}</Text>
            <Text style={s.text}>{props.text}</Text>
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
        fontFamily:'Inter',
        fontWeight: '600',
        margin: 22
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontFamily:'Inter',
        fontWeight: '400',
        letterSpacing: 1,
        marginLeft: 22
    }
});
