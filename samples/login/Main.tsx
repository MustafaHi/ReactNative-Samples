//| MustafaHi - ReactNative Samples - Login Form
//| https://github.com/MustafaHi/ReactNative-Samples/

import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'

type Props = StackScreenProps<RouteParam, 'LoginSample'>

export default function LoginSample({ navigation, route }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Enter Your Access Info</Text>
      <Text style={s.text}>Enter Your Access Info</Text>
      <TextInput placeholder='Email' keyboardType='email-address' style={s.input}/>
      {/* There is No hidden password input! */}
      <TextInput placeholder='Password' keyboardType='visible-password' style={s.input}/>
      <View style={s.button}>
        {/* Buttons are native and cannot be styled!
            an alternative would be custom <Pressable/> component */}
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

