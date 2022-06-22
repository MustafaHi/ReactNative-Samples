//| MustafaHi - ReactNative Samples
//| https://github.com/MustafaHi/ReactNative-Samples/

import { useState, useEffect } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//| In regular react-native app you can use CameraRoll,
//| but for expo use MediaLibrary which provide semilar api
//| https://docs.expo.dev/versions/v45.0.0/sdk/media-library/
import * as MediaLibrary from "expo-media-library";

type Props = StackScreenProps<RouteParam, 'GallerySample'>

export default function GallerySample({ navigation, route }: Props)
{
  const [photos, setPhotos] = useState<MediaLibrary.PagedInfo<MediaLibrary.Asset> | undefined>();
  //| Check if the user granted permission, and ask for it if not granted.
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
      //| Get first 20 photo, getting more will lead to slower app, therefore
      //| LargeGallerySample exist with optimization for larger lists.
      setPhotos(await MediaLibrary.getAssetsAsync({first: 20, sortBy: 'default'}));
    };

    //| To call async function, useEffect, otherwise issues with other components will arise.
    useEffect(() => { getPhotos(); }, []);

    let images = [];
    for (let photo of photos?.assets || [])
      images.push(<Image style={{width: 200, height: 200}} source={{uri: photo.uri}} resizeMode='contain'/>);

    return (
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap"}}>
          {images}
        </View>
      </ScrollView>
    );
  }
  
}

