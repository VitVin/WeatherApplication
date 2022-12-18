import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        width: phoneWidth,
        height: phoneHeight,
        flexDirection: 'column',
        alignItems: 'center',
      
    },
    searchArea:{
        height: '30%',
        width: '100%',
       justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    text:{
        fontSize: 20
    }
});