//| MustafaHi - ReactNative Samples - Data Persistence
//| https://github.com/MustafaHi/ReactNative-Samples/

// import { useState } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

export default function Select({ name, value, options, onChange }: { name: string, value: string, options: SelectOption[], onChange: Function }) {
  let children = [];
  for (let o of options)
    children.push(<Option key={o.value} props={{ ...o, active: (o.value == value) }} onChange={(value: string) => onChange(name, value)} />)
  return (
    <View style={s.select}>
      {children}
    </View>
  );
}

function Option({ props, onChange }: { props: SelectOption, onChange: Function }) {
  return (
    <Pressable onPress={() => onChange(props.value)} style={{ ...s.option, backgroundColor: props.active ? 'cyan' : 'transparent' }}>
      <Text>{props.caption}</Text>
    </Pressable>
  )
}

const s = StyleSheet.create({
  select: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  option: {
    padding: 10,
  },
});

