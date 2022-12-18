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

const getDate = () => {
    return new Date().toLocaleDateString();
}

export const MainScreen = ({ navigation }) => {
    const [cityName, setCityName] = useState('')
    const [temperature, setTemperature] = useState('')
    const [feelsTemperature, setFeelsTemperature] = useState('')
    const [description, setDescription] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [windGust, setWindGust] = useState('')
    const [windDegree, setWindDegree] = useState('')
    const [pressure, setPressure] = useState('')
    const [humidity, setHumidity] = useState('')
    const [minTemperature, setMinTemperature] = useState('')
    const [maxTemperature, setMaxTemperature] = useState('')
    const [data, setData] = useState('')
    const [weatherIcon, setweatherIcon] = useState('')

    const writeData = async (data) => {
        try {
            setTemperature(Math.trunc(data.main.temp));
            setFeelsTemperature(Math.trunc(data.main.feels_like));
            setDescription(data.weather[0].description);
            setCityName(data.name);
            setHumidity(data.main.humidity);
            setPressure(data.main.pressure);
            setWindDegree(data.wind.deg);
            setWindGust(data.wind.gust);
            setWindSpeed(data.wind.speed);
            setMinTemperature(Math.trunc(data.main.temp_min))
            setMaxTemperature(Math.trunc(data.main.temp_max))
            setweatherIcon(data.weather[0].icon)
        }
        catch (e) { }
    }

    useEffect(() => {
        if (data) {
            try {
                console.log(data)
                writeData(data);
            }
            catch (e) {
            }
        }
    }, [data])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <LinearGradient
                colors={['rgb(12,40,226)', 'rgb(42,179,234)']}
                style={styles.container}>
                <StatusBar hidden={true} />
                <Header setData={setData} navigation={navigation} />
                {data ?
                    <>
                        <View style={styles.cityNameContainer}>
                            <Text style={styles.cityName}>{cityName}</Text>
                            <Text style={styles.dateText}>{getDate()}</Text>
                        </View>
                        <MainInfoBox temperature={temperature} minTemperature={minTemperature} maxTemperature={maxTemperature} humidity={humidity} description={description} weatherIcon={weatherIcon} />
                        <DetailsTitle title={'Details'} />
                        <DetailItem icon={require("../../assets/icons/Temperature.png")} title={'Feels like:'} infoText={feelsTemperature + '\u00b0'} />
                        <DetailItem icon={require("../../assets/icons/Pressure.png")} title={'Pressure'} infoText={pressure + ' hPa'} />
                        <DetailsTitle title={'Wind'} />
                        <DetailItem icon={require("../../assets/icons/WindSpeed.png")} title={'Speed'} infoText={windSpeed + ' m/s'} />
                        <DetailItem icon={require("../../assets/icons/WindGust.png")} title={'Gust'} infoText={windGust + ' m/s'} />
                        <DetailItem icon={require("../../assets/icons/WindDegree.png")} title={'Degree'} infoText={windDegree + '\u00b0'} />
                    </>
                    : <NoCityBackground />}
            </LinearGradient >

        </ScrollView>
    );
};