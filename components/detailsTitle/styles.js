import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: phoneHeight/20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'rgb(255, 255, 255)'
    },
});