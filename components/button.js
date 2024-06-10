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
        paddingHorizontal: "15%",
        borderRadius: 35,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: 50,
        display: "flex"
    },
    buttonText: {
        color: "white",
        fontFamily: "Baskerville",
        fontSize: 20,
        textAlign: "center"
    }
})

export default Button;