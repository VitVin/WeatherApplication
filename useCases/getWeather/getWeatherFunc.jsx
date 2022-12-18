import axios from 'axios';
import { View, Text, TextInput, ImageBackground, KeyboardAvoidingView, Alert } from 'react-native';
import { styles } from './styles';
import { Input } from '../components/input';
import { SearchButton } from '../components/button';
import { InfoWindow } from '../components/infoWindow';
import LinearGradient from 'react-native-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { putDataToStorage } from '../../src/appStorage/putDataToStorage';


const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather/'
const appid = '718403243931c64fbd55e1521e053cf7'


export const getWeather = async ({ cityName }) => {
    
    try {
        const response = await axios.get(WEATHER_URL, {
            params: {
                q: cityName,
                appid: appid,
                exclude: 'daily',
                units: 'metric',
                lang: 'en'
            }
        });
        if (response.status === 200) {
            console.log(response.status)
            return response.data
        };
    }
    catch (e) {
        if (e.response.status === 404) {
            return alert('City is not found')
        }
        return (e);
    }
}