import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

type Sample01Props = StackScreenProps<RouteParam, 'Sample01'>

export default function Sample01({ navigation, route }: Sample01Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Enter Your Access Info</Text>
      <Text style={s.text}>Enter Your Access Info</Text>
      <TextInput placeholder='Email' keyboardType='email-address' style={s.input}/>
      <TextInput placeholder='Password' keyboardType='visible-password' style={s.input}/>
      <View style={s.button}>
        <Button title='LOGIN'/>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 10,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    marginVertical: 5,
  },
  input: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    marginTop: 15,
  }
});

