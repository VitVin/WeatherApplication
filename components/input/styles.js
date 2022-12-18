import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(191, 207, 214, 0.3)',
        height: '95%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: 'rgba(191, 207, 214, 0.3)',
    },
    input: {
        height: '100%',
        width: '70%',
        color: 'rgb(255, 255, 255)',
        fontSize: 17,
        textAlign: 'center',
    },
    button: {
        height: '100%',
        width: '15%',
    },
    icon: {
        height: '100%',
        width: '100%',
    },
});