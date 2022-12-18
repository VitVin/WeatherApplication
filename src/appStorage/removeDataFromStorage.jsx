import AsyncStorage from '@react-native-async-storage/async-storage';


export const removeDataFromStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
       return undefined;
    }
}