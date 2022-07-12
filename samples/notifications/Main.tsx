//| MustafaHi - ReactNative Samples - Notifications
//| https://github.com/MustafaHi/ReactNative-Samples

import { View, Text, Button } from 'react-native'

import * as Notifications from 'expo-notifications';
import React, { useEffect, useRef, useState } from 'react';
import { Notification } from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function NotifSample() {
  const [pushToken, setPushToken] = useState('');
  const [notification, setNotification] = useState<Notification>();
  const notificationListener = useRef<Notification | any>();
  const responseListener = useRef<Notification | any>();

  useEffect(() => {
    (async () => {
      setPushToken(await registerForPushNotificationsAsync());
    })();

    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => setNotification(notification)
      );
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => console.log('response', response)
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
    <View>
      <Text>token : {pushToken} </Text>
      <Text>title : {notification && notification.request.content.title}</Text>
      <Text>Body  : {notification && notification.request.content.body}</Text>
      <Text>Data  : {notification && JSON.stringify(notification.request.content.data)}</Text>
      <Button title='call notification' onPress={
        () => {
          Notifications.scheduleNotificationAsync({
            content: {
              title: "ReactNative Samples",
              body: "github.com/MustafaHi/ReactNative-Samples",
            },
            // delay:
            trigger: null
          });
        }
      }/>
    </View>
  );
}


async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('failed to get push token');
    return '';
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;

  Notifications.setNotificationChannelAsync('default', {
    name: 'default',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF231F7C'
  });

  return token;
}

