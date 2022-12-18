import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
});