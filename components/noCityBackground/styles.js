import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;
const headerHight = phoneHeight / 18;

export const styles = StyleSheet.create({
    container: {
        height: phoneHeight - headerHight,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Text: {
        fontSize: 20,
        color: 'rgb(255, 255, 255)'
    },
    icon: {
        height: '20%',
        width: '20%',
    }
});