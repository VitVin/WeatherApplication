import AsyncStorage from '@react-native-async-storage/async-storage';

export const putDataToStorage = async (key, data) => {
    try {
        await AsyncStorage.setItem(key, data)
    } catch (e) {

    }
}
