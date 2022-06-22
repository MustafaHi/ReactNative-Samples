//| MustafaHi - ReactNative Samples
//| https://github.com/MustafaHi/ReactNative-Samples/

import { useState, useEffect } from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

//| The following sample use List api to display large number of items
//| without hindering the performance of the app
//| same sample as GallerySample, note it use different style

//| In regular react-native app you can use CameraRoll,
//| but for expo use MediaLibrary which provide semilar api
//| https://docs.expo.dev/versions/v45.0.0/sdk/media-library/
import * as MediaLibrary from "expo-media-library";

type Props = StackScreenProps<RouteParam, 'LargeGallerySample'>

export default function LargeGallerySample({ navigation, route }: Props)
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
      setPhotos(await MediaLibrary.getAssetsAsync({first: 100, sortBy: 'default'}));
    };

    //| To call async function, useEffect, otherwise issues with other components will arise.
    useEffect(() => { getPhotos(); }, []);

    return (
      <View>
        <FlatList 
          data={photos?.assets} 
          //| Each item must have `key` property for updating
          keyExtractor={item => item.id}
          //| Define the rendering of each item
          renderItem=
          {
            ({item: photo}) => 
            <Image style={{flex: 1, height: 200}} source={{uri: photo.uri}}/>
          }
          //| Define layout of the items, you cant use `style` properties
          horizontal={false} numColumns={2}
        />
      </View>
    );
  }
  
}

