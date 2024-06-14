import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Card from "../components/card"
import BottomBar from '../components/bottomBar';

export default function Generator3({navigation}) {
    return (
        <View style={{flex: 1}}>
            <LinearGradient
            colors = { ['#F4DDFF','#FFCFAE'] }
            start = { { x: 0, y: 0 } }
            end = { { x: 0, y: 1 } }
            style = { [styles.container] }
        >
            <View style={[styles.dropShadow, {flex: 5, width: "90%"}]}>
                <LinearGradient 
                    colors = { ['#FAEBFC', '#FFEBDD'] } 
                    start = {{ x: 0, y: 0 }}
                    end = {{ x: 0, y: 1 }}
                    style={[styles.container, {width: "100%", margin: "10%", borderRadius: 10, alignSelf: "center"}]}>
                        <View style={[{flex: 0.5,backgroundColor: "white", padding: 5, borderRadius: 10, marginTop: 10, right: "2%"}, styles.dropShadow]}>
                            <Text>Do you have these items?</Text>
                        </View>
                        <View style={[{flex: 1, borderRadius: 60, backgroundColor: "white", padding: 10, width: 60, height: 60, left: "-35%", top: "-2%"}, styles.dropShadow]}>
                            <Image source={require("../assets/images/hat.png")} style={{height: 40, width: 40}}></Image>
                        </View>
                        <View style={[{flex: 0.5,backgroundColor: "white", padding: 5, borderRadius: 10, marginTop: 10, right: "10%"}, styles.dropShadow]}>
                            <Text>Choose a recipe:</Text>
                        </View>
                        <View style={[{flex: 1, borderRadius: 60, backgroundColor: "white", padding: 10, width: 60, height: 60, left: "-35%", top: "-2%"}, styles.dropShadow]}>
                            <Image source={require("../assets/images/hat.png")} style={{height: 40, width: 40}}></Image>
                        </View>
                        <View style={{flex: 6, width: "90%"}}>
                            <Card Name="Fried Rice" onPress={() => navigation.navigate("Recipe")}></Card>
                            <Card Name="Fried Noodles" onPress={() => navigation.navigate("Recipe")}></Card>
                        </View>
                        <View style={[{flex: 0.5,backgroundColor: "white", padding: 5, borderRadius: 10, marginHorizontal: 10, right: "30%", top:"-1%"}, styles.dropShadow]}>
                            <Text>Generating: </Text>
                        </View>
                    <StatusBar style="auto" />
                </LinearGradient>
            </View>
        <BottomBar style={{flex: 1}} navigator={navigation}></BottomBar>    
        </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    }
});
  