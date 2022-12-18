import { StyleSheet, Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: phoneHeight / 2,
        width: '90%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'rgb(255,255,255)',
        borderBottomWidth: 2,
        marginBottom: '5%'
    },
    mainTemperatureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherIcon: {
        height: '100%',
        width: '30%'
    },
    icon: {
        height: '100%',
        width: '20%'
    },
    extraInfoContainer: {
        width: '40%',
        height: '11%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    extraInfoText: {
        fontSize: 20,
        color: 'rgb(255, 255, 255)'
    },
    temperatureText: {
        fontSize: 80,
        color: 'rgb(255,255,255)',
    },
    descriptionText: {
        top: '15%',
        fontSize: 30,
        color: 'rgb(255,255,255)',
    },
});