import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Search = props => {
    return(
        <TouchableOpacity style={[{flex:1, flexDirection: "row", backgroundColor: "white", width: "70%", borderRadius: 20, justifyContent: "center", paddingHorizontal: 10}, styles.dropShadow]} onPress={props.OnPress}>
            <View style={{flex:2, justifyContent: "center"}}>
                <Text style={{fontSize: 24}}> Search... </Text>
            </View>
            <View style={{flex:1, justifyContent: "center", alignItems: "flex-end"}}>
                <Image source={require('../assets/images/BarcodeScan.png')} style={{height: 40, width: 40}}>
                </Image>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    }
});

export default Search;