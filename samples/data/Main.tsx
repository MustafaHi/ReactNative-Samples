import { useEffect, useReducer, useState } from "react";
import { View, Text, TextInput, } from "react-native";
import { Throttle } from "../../utils";
import * as Store from './storage'

export default function DataSample() {
  const [data, setData] = useState({name: 'sample'});

  console.log('data', data);
  useEffect(() => { (async() => {
    const newData = await Store.get();
    if   (newData)  setData(newData);
    console.log('new Data', data);
  })()}, []);

  function onChange(name: keyof typeof data, value: any) {
    // console.log(name, value);
    data[name] = value;
    setData(data);
    console.log("setData:", data);
    Throttle(Store.set, 1000)(data);
  }

  return (
    <View>
      <Text>Data Persistance</Text>
      <Input name="name" value={data.name} onChange={onChange}/>
    </View>
  )
}


function Input({name, value, onChange}: {name: string, value: string, onChange: Function}) {
  return <TextInput value={value} onChange={(value) => onChange(name, value.nativeEvent.text)}/>;
}

