import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Tag from './tag';
import Heart from './heart'

const Card = props => {
    color = "Green"
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={[{width: "100%", backgroundColor: "#FBEFF7", borderRadius: 5, paddingVertical: 3, margin: 10, height: 100}, props.style, styles.dropShadow]}>
                <View style={{flex: 2, flexDirection: "row"}}> 
                    <Text style={{flex:9, marginLeft: 10, fontFamily: "Lemonada-SemiBold", fontSize: 28}}> {props.Name} </Text>
                    <View style={{flex: 1, marginTop: 10}}>
                        <Heart></Heart>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: "row"}}> 
                    <Tag Name="No Diary" Color="Green" style={{flex: 1, maxWidth: "20%", height: 25, marginHorizontal: 10}} />
                    <Tag Name="Vegan" style={{flex: 1, maxWidth: "20%", height: 25, marginRight: 10}} />
                </View>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    }
});

export default Card;