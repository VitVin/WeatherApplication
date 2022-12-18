import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { MainInfoBox } from '../../components/mainInfoBox';
import { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { DetailsTitle } from '../../components/detailsTitle';
import { DetailItem } from '../../components/detailItem';
import { Header } from '../../components/header';
import { getWeather } from '../../useCases/getWeather/getWeatherFunc';
import { takeDataFromStorage } from '../../src/appStorage/takeDataFromStorage';
import { TouchableIcon } from '../../components/touchableIcon';
import { NoCityBackground } from '../../components/noCityBackground';


export const DrawerScreen = () => {

    return (
     <View style={styles.container}>

     </View>
    );
};