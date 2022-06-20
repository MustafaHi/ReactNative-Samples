import { useState, useEffect } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import * as MediaLibrary from "expo-media-library";

type Props = StackScreenProps<RouteParam, 'GallerySample'>

export default function GallerySample({ navigation, route }: Props)
{
  const [photos, setPhotos] = useState(['']);
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status?.granted == false)
  {
    if (status?.canAskAgain) 
      return (
        <View>
          <Text>Grant Permission!</Text>
          <Button title="ALLOW" onPress={() => requestPermission()}/>
        </View>
      );
    else
      return (
        <View>
          <Text>Grant Permission!</Text>
          <Text>It looks like you blocked request, you must grant permission from system setting!</Text>
        </View>
      );
  }

  else
  
  {
    const getPhotos = async () => {
      let pics = await MediaLibrary.getAssetsAsync({first: 10, sortBy: 'default'});
      setPhotos(pics.assets.map(p => p.uri));
    };

    useEffect(() => { getPhotos(); }, []);

    let images = [];
    for (let photo of photos)
      images.push(<Image style={{width: 200, height: 200}} source={{uri: photo}} resizeMode='contain'/>);

    return (
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap"}}>
          {images}
        </View>
      </ScrollView>
    );
  }
  
}

