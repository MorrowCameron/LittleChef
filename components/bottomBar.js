import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Peach } from "@env";
const BottomBar = props => {
    const [active, setActive] = useState('Home');
    return(
        <View style={[{flex: 1, flexDirection: "row", backgroundColor: Peach, borderRadius: 10, top: 20, marginVertical: 10, alignItems: 'center'}, styles.dropShadowTop]}>
            {
                active === "Archive" ? 
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => setActive('Archive')}>
                    <Image source={require('../assets/images/ArchiveSelected.png')} style={{width:70, height: 80}}></Image>    
                </TouchableOpacity>
                : 
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => setActive('Archive')}>
                    <Image source={require('../assets/images/Archive.png')} style={{width:70, height: 80}}></Image>    
                </TouchableOpacity>
            }
            {
                active === "Home" ?
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => setActive('Home')}>
                    <Image source={require('../assets/images/HomeSelected.png')} style={{width: 70, height:80, color: "red"}}></Image>    
                </TouchableOpacity>
                :
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => setActive('Home')}>
                    <Image source={require('../assets/images/Home.png')} style={{width: 70, height:80, color: "red"}}></Image>    
                </TouchableOpacity>
            }
            {
                active === "Profile" ?
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => setActive('Profile')}> 
                    <Image source={require('../assets/images/ProfileSelected.png')} style={{width: 70, height: 80}}></Image>    
                </TouchableOpacity>
                :
                <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => setActive('Profile')}> 
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