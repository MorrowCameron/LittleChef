import React, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Peach } from "@env";

const BottomBar = props => {
    const route = useRoute();
    return(
        <View style={[{flex: 1, flexDirection: "row", backgroundColor: Peach, borderRadius: 10, top: 20, marginVertical: 10, alignItems: 'center'}, styles.dropShadowTop]}>
            {
                route.name === "Archive" ? 
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                    <Image source={require('../assets/images/ArchiveSelected.png')} style={{width:70, height: 80}}></Image>    
                </TouchableOpacity>
                : 
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => props.navigator.navigate("Archive")}>
                    <Image source={require('../assets/images/Archive.png')} style={{width:70, height: 80}}></Image>    
                </TouchableOpacity>
            }
            {
                route.name === "Home" ?
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
                    <Image source={require('../assets/images/HomeSelected.png')} style={{width: 70, height:80, color: "red"}}></Image>    
                </TouchableOpacity>
                :
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => props.navigator.navigate("Home", {ingredients : []})}>
                    <Image source={require('../assets/images/Home.png')} style={{width: 70, height:80, color: "red"}}></Image>    
                </TouchableOpacity>
            }
            {
                route.name === "Profile" ?
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}}> 
                    <Image source={require('../assets/images/ProfileSelected.png')} style={{width: 70, height: 80}}></Image>    
                </TouchableOpacity>
                :
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => props.navigator.navigate("Profile")}> 
                    <Image source={require('../assets/images/Profile.png')} style={{width: 70, height: 80}}></Image>    
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    dropShadowTop: {
        shadowColor: '#C98276',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.8,
        shadowRadius: 3
    }
});

export default BottomBar;