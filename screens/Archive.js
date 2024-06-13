import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Card from "../components/card";
import BottomBar from '../components/bottomBar';

export default function Archive({navigation}) {
    return (
        <View style={{flex: 1}}>
            <LinearGradient
            colors = { ['#F4DDFF','#FFCFAE'] }
            start = { { x: 0, y: 0 } }
            end = { { x: 0, y: 1 } }
            style = { styles.container }
            >   
                <View style={{flex:4, width: "90%", marginTop: "5%"}}>
                    <View style={{marginLeft: 5, marginTop: 5, flex: 1}}>
                        <View style={{flex: 0.3}}>
                            <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30, textAlign: "left"}}>Archive:</Text>
                        </View>
                        <ScrollView style={{flex: 1, flexDirection: "column", height: Dimensions.get('window').height * 0.4}}> 
                            <Card style={{flex: 1, alignSelf: "center", margin: 10}} Name="Pad Thai"></Card>
                            <Card style={{flex: 1, alignSelf: "center", margin: 10}} Name="Hamburger Patee"></Card>
                        </ScrollView>
                        
                    </View>                    
                    <View style={{marginLeft: 5, marginTop: 5, flex: 1}}>
                        <View style={{flex: 0.3}}>
                            <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30, textAlign: "left"}}>Favorite:</Text>
                        </View>   
                        <ScrollView style={{flex: 1, flexDirection: "column", height: Dimensions.get('window').height * 0.4}}> 
                            <Card style={{flex: 1, alignSelf: "center", margin: 10}} Name="Fried Rice"></Card>
                            <Card style={{flex: 1, alignSelf: "center", margin: 10}} Name="Miso Soup"></Card>
                        </ScrollView>
                    </View>
                </View>
                <BottomBar style={{flex: 1}} navigator={navigation}/>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    }
});
  