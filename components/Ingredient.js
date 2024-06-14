import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

const IngredientObj = props => {
    return(
        <View style={[{flex: 2, flexDirection: "row"}, props.style]}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontFamily: "Baskerville", fontSize: 16}}>{props.ingredient}</Text>
            </View>
            <View style={{flex: 1, flexDirection: "row"}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', left: 50}}>
                    <Image source={require("../assets/images/Subtraction.png")} style={{width: 50, height: 50}}></Image>
                </TouchableOpacity>
                <View style={{flex: 0.5, justifyContent: 'center', left: 30}}>
                    <Text style={{textAlign: "center"}}>{props.count}</Text>
                </View>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', right: "-20%"}}>
                    <Image source={require("../assets/images/Addition.png")} style={{width: 50, height: 50}}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default IngredientObj;