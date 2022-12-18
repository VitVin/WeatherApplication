import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const phoneWidth = Dimensions.get('window').width;
const phoneHeight = Dimensions.get('window').height;


export const styles = StyleSheet.create({
    container: {
        height: phoneHeight/10,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(255,255,255, 0.5)'
    },
    title: {
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        height: '100%',
        width: '20%',
        marginRight: '5%',
    },
    text: {
        fontSize: 20,
        color: 'rgb(255,255,255)'
    },
});