import React from "react";
import { View, Text, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
// import CameraRoll from "expo-cameraroll";
import * as MediaLibrary from "expo-media-library"

type Props = StackScreenProps<RouteParam, 'GallerySample'>

export default async function GallerySample({navigation, route}: Props)
{
    const [status, requestPermission] = MediaLibrary.usePermissions();
    console.log("status", status);
    if (status?.granted == false && status?.canAskAgain)
    {
        requestPermission();
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
    return (
        <View>
            <Text>Welcome to the Gallery!</Text>
            {/* {listPhotos()} */}
        </View>
    )
}
