//| MustafaHi - ReactNative Samples - Data Persistence
//| https://github.com/MustafaHi/ReactNative-Samples/

// import { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Checkbox({ name, value, caption, onChange }: { name: string, value: boolean, caption: string, onChange: Function }) {
  return (
    <Pressable onPress={() => onChange(name, !value)} style={s.container}>
      <View style={s.box}>
        {value && <Ionicons name="checkmark" size={24} color="black" />}
      </View>
      <Text>{caption}</Text>
    </Pressable>
  )
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 28,
    height: 28,
    marginEnd: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

