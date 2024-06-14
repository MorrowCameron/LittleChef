import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const Textbox = props => {
    return(
        <View>
            <TextInput
                style={props.style}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                onEndEditing={props.onEndEditing}
 />
        </View>
    );
}

export default Textbox;