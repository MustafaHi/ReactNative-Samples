import { useEffect, useReducer, useState, useMemo } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Debounce } from "../../utils";
import * as Store from './storage';

function reducer(state: any, action: {type: string, value: any}) {
  switch (action.type) {
    case 'all':
      return {...state, ...action.value};
    case 'name':
      return {...state, name: action.value};
  }
}

export default function DataSample() {
  const [data, updateData] = useReducer(reducer, {name: 'sample'});

  useEffect(() => { (async() => {
    try {
      const newData = await Store.get();
        if (newData)
        updateData({type: 'all', value: newData});
    } catch(e) {
      console.log('error Data', e);
    }
  })()}, []);
  useEffect(() => { save(data); }, [data]);
  
  const save = useMemo(() => Debounce((data: object) => Store.set(data), 1000), []);
  function onChange(name: string, value: any) {
    updateData({type: name, value: value});
  }

  return (
    <View>
      <Text>Data Persistance</Text>
      <Input name="name" value={data.name} onChange={onChange}/>
      <Button title="Log Data" onPress={() => console.log(data)}/>
    </View>
  )
}


function Input({name, value, onChange}: {name: string, value: string, onChange: Function}) {
  return <TextInput value={value} onChangeText={(text) => onChange(name, text)}/>;
}

