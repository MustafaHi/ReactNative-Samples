import AsyncStorage from "@react-native-async-storage/async-storage";

export async function set(value: object) {
  try {
    await AsyncStorage.setItem('ReactNativeSamples', JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

export async function get() {
  try {
    return JSON.parse(await AsyncStorage.getItem('ReactNativeSamples') || '');
  } catch (e) {
    console.log(e);
  }
}

