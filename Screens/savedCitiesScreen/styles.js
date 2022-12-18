import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { isConfigured } from 'react-native-reanimated/lib/reanimated2/core';


const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        height: phoneHeight,
        width: phoneWidth,
        alignItems: 'center',
    },
    Item: {
        height: phoneHeight / 15,
        width: phoneWidth,
    },
    icon: {
        width: '100%',
        height: '100%'
    }
});