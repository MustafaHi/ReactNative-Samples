//| MustafaHi - ReactNative Samples - Data Persistence
//| https://github.com/MustafaHi/ReactNative-Samples/

import { useEffect, useReducer, useState, useMemo } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import { Debounce } from "../../utils";
import * as Store from './storage';

function reducer(state: any, action: {type: string, value: any}) {
  switch (action.type) {
    case 'all':
      return {...state, ...action.value};
    case 'name':
      return {...state, name: action.value};
    case 'ride':
      return {...state, ride: action.value};
  }
}

export default function DataSample() {
  const [data, updateData] = useReducer(reducer, {name: 'sample', ride: 'bike'});

  //| Get Data from Storage
  useEffect(() => { (async() => {
    try {
      const newData = await Store.get();
        if (newData)
        updateData({type: 'all', value: newData});
    } catch(e) {
      console.log('error Data', e);
    }
  })()}, []);
  //| Save Data to Storage when it change after x time
  useEffect(() => { save(data); }, [data]);
  
  const save = useMemo(() => Debounce((data: object) => Store.set(data), 1000), []);
  function onChange(name: string, value: any) {
    updateData({type: name, value: value});
  }

  let rideOptions = [
    { value: "car", caption: "Car" },
    { value: "bike", caption: "Motor Bike" },
    { value: "cycle", caption: "Bicycle" },
  ]

  return (
    <View style={{backgroundColor: 'white'}}>
      <Text>Data Persistance</Text>
      <Input name="name" value={data.name} onChange={onChange} />
      <Select name="ride" value={data.ride} options={rideOptions} onChange={onChange} />
      <Button title="Log Data" onPress={() => console.log(data)} />
    </View>
  )
}


function Input({name, value, onChange}: {name: string, value: string, onChange: Function}) {
  return <TextInput value={value} onChangeText={(text) => onChange(name, text)}/>;
}

function Select({name, value, options, onChange} : {name: string, value: string, options: SelectOptions[], onChange: Function}) {
  let children = [];
  for (let o of options)
    children.push(<Option key={o.value} props={{...o, active: (o.value == value)}} onChange={(value: string) => onChange(name, value)}/>)
  return (
    <View style={{borderWidth: 2}}>
      {children}
    </View>
  );
}
interface SelectOptions {
  value: string;
  caption: string;
  active?: boolean;
}

function Option({props, onChange} : {props: SelectOptions, onChange: Function}) {
  return (
    <Pressable onPress={() => onChange(props.value)} style={{backgroundColor: props.active ? 'cyan' : 'white'}}>
      <Text style={{borderWidth: 1, borderColor: "blue", padding: 10}}>{props.caption} - {props.value}</Text>
    </Pressable>
  )
}

