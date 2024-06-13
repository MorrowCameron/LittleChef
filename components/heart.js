import React, {useState} from 'react';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';

const Heart = props => {
    const [liked, setLiked] = useState(false);
    return(
        <TouchableOpacity onPress={() => setLiked(!liked)}>
            <View>
                {
                    liked === true ?
                    <Image source={require('../assets/images/FullHeart.png')} style={{height: 20, width: 20}} />
                    :
                    <Image source={require('../assets/images/EmptyHeart.png')} style={{height: 20, width: 20}} />
                }
            </View> 
        </TouchableOpacity>
    );
}

export default Heart;