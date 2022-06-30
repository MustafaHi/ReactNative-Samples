//| MustafaHi - ReactNative Samples - Data Persistence
//| https://github.com/MustafaHi/ReactNative-Samples/

import { useEffect, useReducer, useState, useMemo } from "react";
import { View, Text, TextInput, Button, Pressable, StyleSheet } from "react-native";
import { Debounce } from "../../utils";
import * as Store from './storage';
import Select from "./Select";
import Checkbox from "./Checkbox";

function reducer(state: any, action: { type: string, value: any }) {
  switch (action.type) {
    case 'all':
      return { ...state, ...action.value };
    case 'name':
      return { ...state, name: action.value };
    case 'ride':
      return { ...state, ride: action.value };
    default:
      return { ...state, [action.type]: action.value };
  }
}

export default function DataSample() {
  const [data, updateData] = useReducer(reducer, { name: 'sample text', ride: 'bike', like: true });

  //| Get Data from Storage
  useEffect(() => {
    (async () => {
      const newData = await Store.get();
      if   (newData)
        updateData({ type: 'all', value: newData });
    })()
  }, []);
  //| Save Data to Storage when it change after x time
  useEffect(() => { save(data); }, [data]);

  const save = useMemo(() => Debounce((data: object) => Store.set(data), 1000), []);
  function onChange(name: string, value: any) {
    updateData({ type: name, value: value });
  }

  let rideOptions: SelectOption[] = [
    { value: "car", caption: "Car" },
    { value: "bike", caption: "Motor Bike" },
    { value: "cycle", caption: "Bicycle" },
  ];

  return (
    <View style={s.container}>
      <Text style={s.text}>Data Persistance | your input will be remembered after you close the application and open it again.</Text>
      <Label caption="User Name" />
        <Input name="name" value={data.name} onChange={onChange} />
      <Label caption="Preferred ride" />
        <Select name="ride" value={data.ride} options={rideOptions} onChange={onChange} />
      <Label caption="Like" />
        <Checkbox name="like" value={data.like} caption="then click this checkbox" onChange={onChange} />
      <Label caption="Print data" />
        <Button title="Log Data" onPress={() => console.log(data)} />
    </View>
  )
}

function Label({ caption }: { caption: string }) {
  return <Text style={s.label}>{caption} :</Text>
}
function Input({ name, value, onChange }: { name: string, value: string, onChange: Function }) {
  return <TextInput value={value} onChangeText={(text) => onChange(name, text)} style={s.input}/>;
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    marginVertical: 8,
  },
  label: {
    marginHorizontal: 5,
    marginVertical: 10,
    fontSize: 18,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

