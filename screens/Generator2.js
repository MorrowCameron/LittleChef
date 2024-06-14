import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import IngredientObj from '../components/Ingredient';
import Button from "../components/button";

export default function Generator2({navigation}) {
    return (
        <View style={{flex: 1}}>
            <LinearGradient
            colors = { ['#F4DDFF','#FFCFAE'] }
            start = { { x: 0, y: 0 } }
            end = { { x: 0, y: 1 } }
            style = { styles.container }
        >
            <View style={[styles.dropShadow, {flex: 4, width: "90%"}]}>
                <LinearGradient 
                    colors = { ['#FAEBFC', '#FFEBDD'] } 
                    start = {{ x: 0, y: 0 }}
                    end = {{ x: 0, y: 1 }}
                    style={[styles.container, {width: "100%", margin: "10%", borderRadius: 10, alignSelf: "center"}]}>
                        <View style={[{flex: 0.5,backgroundColor: "white", padding: 5, borderRadius: 10, marginTop: 10, right: "10%"}, styles.dropShadow]}>
                            <Text>Do you have these items?</Text>
                        </View>
                        <View style={[{flex: 1, borderRadius: 60, backgroundColor: "white", padding: 10, width: 60, height: 60, left: "-35%", top: "-2%"}, styles.dropShadow]}>
                            <Image source={require("../assets/images/hat.png")} style={{height: 40, width: 40}}></Image>
                        </View>
                        <View style={{flex: 10, width: "90%"}}>
                            <IngredientObj ingredient={"Paprika"} count={1} style={{top: -20}}></IngredientObj>
                            <IngredientObj ingredient={"Salt"} count={1} style={{top: -100}}></IngredientObj>
                            <IngredientObj ingredient={"Pepper"} count={1} style={{top: -180}}></IngredientObj>
                    
                        </View>
                        <View style={{flex: 3}}>
                            <Button title="Continue" onPress={()=> navigation.navigate("Generator2")}></Button>
                        </View>
                    <StatusBar style="auto" />
                </LinearGradient>
            </View>
            
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
  