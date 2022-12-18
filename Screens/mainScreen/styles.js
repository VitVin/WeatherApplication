import { StyleSheet, Dimensions, StatusBar } from 'react-native';


const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
const headerHight = phoneHeight / 18;

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityNameContainer: {
        marginTop: '10%',
        alignItems: 'center'
    },
    emptyScreen: {
        height: phoneHeight - headerHight,
        width: phoneWidth,
    },
    cityName: {
        fontSize: 30,
        color: 'rgb(255,255,255)',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(255, 255, 255, 0.7)',
    },
    dateText: {
        fontSize: 15,
        color: 'rgb(255, 255, 255)',
    },
});