import React from "react";
import { View, Text, Button, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
// import CameraRoll from "expo-cameraroll";
import * as MediaLibrary from "expo-media-library"

type Props = StackScreenProps<RouteParam, 'GallerySample'>

export default function GallerySample({ navigation, route }: Props) {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status?.granted == false) {
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
  } else {
    let photos: MediaLibrary.PagedInfo<MediaLibrary.Asset>;
    MediaLibrary.getAssetsAsync({first: 10}).then((e: any) => {
      photos = e;
      let images = [];
      for (let photo of photos.assets)
      {
          images.push(<Image source={{uri: photo.uri}} resizeMode='contain'/>);
      }
      return (
        <View>
          <Text>Welcome to the Gallery!</Text>
          {images}
        </View>
      );
    });
    // let images = [];
    // for (let {node: photo} of photos.edges)
    // {
    //     images.push(<Image source={photo.image} resizeMode='contain'/>);
    // }
    // return (
    //   <View>
    //     <Text>Welcome to the Gallery!</Text>
    //     {images}
    //   </View>
    // );
  }
  // let photos = await MediaLibrary.getAssetsAsync({
  //     first: 10,
  // });
  // console.log(photos);
  // function listPhotos() {
  //     let images = [];
  //     for (let {node: photo} of photos.edges)
  //     {
  //         images.push(<Image source={photo.image} resizeMode='contain'/>);
  //     }
  //     return images;
  // }
  // return (
  //   <View>
  //     <Text>Welcome to the Gallery!</Text>
  //     {/* {listPhotos()} */}
  //   </View>
  // )
}

