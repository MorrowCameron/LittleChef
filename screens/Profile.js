import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomBar from '../components/bottomBar';
import Tag from '../components/tag';
import { StatusBar } from 'expo-status-bar';
import { RED } from '@env';

export default function Archive({navigation}) {

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
                    <View style={{flex: 0.7, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30}}>Profile</Text>
                    </View>
                    <View style={{height: "0.5%", width: "80%", backgroundColor: RED}}></View>
                    <View style={{flex: 2, width: "80%", backgroundColor: "#D9D9D9", marginTop: 10, borderRadius: 10}}>
                        <Text style={{textAlign: "center", fontFamily: "Baskerville", fontSize: 20}}>Dietary Restrictions</Text>
                        <View style={{flex:1, flexDirection: "row"}}>
                            <View style={{flex:1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginBottom: 25}}>
                                <Tag Name="Dairy" Color="Green"></Tag>
                                <Tag Name="Peanuts" Color="Green"></Tag>
                                <Tag Name="Eggs" Color="Green"></Tag>
                                <Tag Name="Lactose" Color="Green"></Tag>
                            </View>
                            <View style={{flex:1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", marginBottom: 25}}>
                                <Tag Name="Celiac" Color="Green"></Tag>
                                <Tag Name="Keto" Color="Green"></Tag>
                                <Tag Name="Carnivore" Color="Green"></Tag>
                                <Tag Name="+Add Tag" Color="Green"></Tag>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{flex: 2, justifyContent: "center"}}>
                        <View style={{flex:1, flexDirection: "row", width: "80%", alignItems: "center"}}>
                            <Text style={{flex: 2, textAlign: "left", fontFamily: "Lemonada", fontSize: 24}}>Notifications</Text>
                            <Switch
                                trackColor={{false: 'white', true: 'white'}}
                                thumbColor={isEnabled ? RED : 'black'}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={[{flex: 0.5},  styles.dropShadow]} />
                        </View>
                        <View style={{flex:1, flexDirection: "row", width: "80%", alignItems: "center"}}>
                            <Text style={{flex: 2, textAlign: "left", fontFamily: "Lemonada", fontSize: 24}}>Camera</Text>
                            <Switch
                                trackColor={{false: 'white', true: 'white'}}
                                thumbColor={isEnabled2 ? RED : 'black'}
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                                style={[{flex: 0.5},  styles.dropShadow]} />
                        </View>
                        <View style={{flex:2, flexDirection: "row", justifyContent: "center"}}>
                            <TouchableOpacity style={{flex:2, alignSelf: "center"}} onPress={() => Alert.alert("Please email us at little-chef@office.calpoly.edu!")}>
                                <Text style={{textAlign: "center", color: "#93B8B7", fontFamily: "Lemonada", fontSize: 24}}>Contact Us</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
  