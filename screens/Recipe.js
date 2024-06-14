import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from '../components/bottomBar';
import Heart from '../components/heart';
import Tag from '../components/tag';
import { StatusBar } from 'expo-status-bar';
import { RED } from '@env';

export default function Recipe({navigation}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return (
        <View style={{flex: 1}}>
            <LinearGradient
            colors = { ['#F4DDFF','#FFCFAE'] }
            start = { { x: 0, y: 0 } }
            end = { { x: 0, y: 1 } }
            style = { styles.container }
        >
            <View style={[styles.dropShadow, {flex: 4, width: "80%"}]}>
                
                <LinearGradient 
                    colors = { ['#FAEBFC', '#FFEBDD'] } 
                    start = {{ x: 0, y: 0 }}
                    end = {{ x: 0, y: 1 }}
                    style={[styles.container, {width: "100%", marginVertical: "10%", borderRadius: 10}]}>
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: "row", width: "100%"}}>
                            <View style={{flex: 3, justifyContent: "center", alignItems: "center"}}>
                                <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30}}>Fried Rice</Text>
                            </View>
                            <View style={{flex: 0.5, justifyContent: 'center', right: "-10%"}}>
                                <Heart></Heart>
                            </View>
                        </View>
                        
                        <View style={{flex: 2, width: "80%", backgroundColor: "#D9D9D9", marginTop: 10, borderRadius: 10}}>
                            <Image source={require('../assets/images/FriedRice.jpeg')} />             
                        </View>
                        <View style={{flex: 2, justifyContent: "center"}}>
                            <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30, textAlign: "left"}}>Ingredients:</Text>
                            <View style={{flex: 1, width: "90%"}}>
                                <Text>- 2x Eggs</Text>
                                <Text>- Basmati Rice</Text>
                                <Text>- Salt </Text>
                            </View>
                        </View>  
                        <View style={{flex: 2, justifyContent: "center"}}>
                            <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30, textAlign: "left"}}>Instructions:</Text>
                            <View style={{flex: 1, width: "90%"}}>
                                <Text>1. Whisk the eggs like you just don't care</Text>
                                <Text>2. Boil the rice for 30 minutes</Text>
                                <Text>3. Add salt to taste </Text>
                            </View>
                        </View>  
                    </ScrollView>
                    <StatusBar style="auto" />
                </LinearGradient>
            </View>
            <View style={{flex: 1, width: "100%"}}>
                <BottomBar navigator={navigation}></BottomBar>
            </View>
            
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
  