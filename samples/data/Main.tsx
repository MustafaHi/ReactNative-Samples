import { useEffect, useReducer, useState, useMemo } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Debounce } from "../../utils";
import * as Store from './storage';

function reducer(state: any, action: {name: string, value: any}) {
  switch (action.name) {
    case 'all':
      return {...state, ...action.value};
    case 'name':
      return {...state, name: action.value};
  }
}

export default function DataSample() {
  // const [data, setD] = useState({name: 'sample'});
  const [data, updateData] = useReducer(reducer, {name: 'sample'});

  console.log('data', data);
  useEffect(() => { (async() => {
    try {
      const newData = await Store.get();
      if   (newData)
        updateData({name: 'all', value: newData});
      console.log('new Data', newData);
      console.log('updated Data', data);
    } catch(e) {
      console.log('error Data', e);
    }
  })()}, []);
  
  const save = useMemo(() => Debounce((data: object) => Store.set(data), 1000), []);
  // function onChange(name: keyof typeof data, value: any) {
  function onChange(name: string, value: any) {
    updateData({name: name, value: value});
    save(data);
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

