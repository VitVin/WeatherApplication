import AsyncStorage from '@react-native-async-storage/async-storage';

export const takeDataFromStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log('getData', value);
            return value;
        }
    } catch (e) {
        return undefined;
    }
}