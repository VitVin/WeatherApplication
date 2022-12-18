import { View, Text, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/input';
import { SearchButton } from '../../components/button';
import { InfoWindow } from '../../components/infoWindow';
import LinearGradient from 'react-native-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { getWeather } from '../../useCases/getWeather/getWeatherFunc';
import { putDataToStorage } from '../../src/appStorage/putDataToStorage';
import { takeDataFromStorage } from '../../src/appStorage/takeDataFromStorage';
import { removeDataFromStorage } from '../../src/appStorage/removeDataFromStorage';

export const SearchScreen = ({ navigation }) => {
    const [cityName, setCityName] = useState('')

    const readData = async (cityName) => {
        const data = await getWeather({ cityName })
        await putDataToStorage('weatherData', JSON.stringify(data))

    }

    return (
        <LinearGradient
            colors={['rgb(12,40,226)', 'rgb(42,179,234)']}
            style={styles.container}>
            <View style={styles.searchArea}>
                <Input value={cityName} setValue={setCityName} />
                <SearchButton func={() => readData(cityName)} />
                <SearchButton func={async () => await takeDataFromStorage('weatherData')} />
            </View>
        </LinearGradient >
    );
};