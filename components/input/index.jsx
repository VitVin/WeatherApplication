import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { getWeather } from '../../useCases/getWeather/getWeatherFunc';
import { TouchableIcon } from '../touchableIcon';

export const Input = ({ setData, visible }) => {
    const [cityName, setCityName] = useState();

    const findWeatherData = async () => {
        if (cityName) {
            setData(await getWeather({ cityName }));
            setCityName('');
            visible(false)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableIcon onPress={() => visible(false)} icon={require("../../assets/icons/Close.png")} />
            <TextInput style={styles.input} placeholder={'What is your city?'} placeholderTextColor='white'
                value={cityName} onChangeText={setCityName} autoFocus
            />
            <TouchableIcon onPress={findWeatherData} icon={require("../../assets/icons/Search.png")} />
        </View>
    );
}