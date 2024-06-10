import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const Textbox = props => {
    const [text, setText] = useState('');
    return(
        <View>
            <TextInput
                style={props.style}
                placeholder={props.placeholder}
                onChangeText={setText}
                value={text} />
        </View>
    );
}

export default Textbox;