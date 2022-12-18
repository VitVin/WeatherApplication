import { View, Text, TextInput, Touchable, Pressable, TouchableOpacity, Image } from 'react-native';
import { DetailsBox } from '../detailsBox';
import { styles } from './styles';


export const MainInfoBox = ({ temperature, minTemperature, maxTemperature, description, humidity, weatherIcon }) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainTemperatureContainer}>
                <Image source={{ uri: "http://openweathermap.org/img/w/" + weatherIcon + ".png" }} resizeMode='contain' style={styles.weatherIcon} />
                <Text style={styles.temperatureText}>{temperature}{'\u00b0'}</Text>
            </View>
            <View style={styles.extraInfoContainer}>
                <Text style={styles.extraInfoText}>{minTemperature}{'\u00b0'} / {maxTemperature}{'\u00b0'}</Text>
                <Image source={require("../../assets/icons/Drop.png")} resizeMode='contain' style={styles.icon} />
                <Text style={styles.extraInfoText}>{humidity}%</Text>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
        </View>
    );
};