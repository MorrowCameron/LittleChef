import {Text, View} from 'react-native';

const Tag = props => {
    color = props.Color == "Green" ? "#CDF8BE" : "#BEF8F1";
    return(
        <View style={[{width: "70%", backgroundColor: color, borderRadius: 5, paddingVertical: 3}, props.style]}>
            <Text style={{textAlign: "center"}}> {props.Name} </Text>
        </View>
    );
}

export default Tag;