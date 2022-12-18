import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        height: phoneHeight / 18,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
   

    },
    button: {
        height: '100%',
        width: '20%',
    },
    icon: {
        height: '100%',
        width: '100%',
    },
});