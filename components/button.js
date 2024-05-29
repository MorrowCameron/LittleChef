import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from 'react-native'
import { RED } from '@env';

const Button = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, props?.style]}>
            <Text style={[styles.buttonText, props?.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: RED,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 35,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: 50
    },
    buttonText: {
        color: "white",
        fontFamily: "Baskerville",
        fontSize: 20
    }
})

export default Button;