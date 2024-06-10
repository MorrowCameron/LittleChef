import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button';
import Textbox from '../components/textbox';
import { StatusBar } from 'expo-status-bar';
import { RED } from "@env";

export default function CreateAccount({navigation}) {
    return (
      <LinearGradient
        colors = { ['#F4DDFF','#FFCFAE'] }
        start = { { x: 0, y: 0 } }
        end = { { x: 0, y: 1 } }
        style = { styles.container }
      >
        <View style={[styles.dropShadow, {flex: 1, width: "80%"}]}>
            <LinearGradient 
                colors = { ['#FAEBFC', '#FFEBDD'] } 
                start = {{ x: 0, y: 0 }}
                end = {{ x: 0, y: 1 }}
                style={[styles.container, {width: "100%", marginVertical: "10%", borderRadius: 10}]}>
                <View style={{flex: 0.7, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30}}>Create Account</Text>
                </View>
                <View style={{height: "0.5%", width: "90%", backgroundColor: RED}}></View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', width: "90%", marginTop: "15%"}}>
                    <Textbox style={[styles.textbox, styles.dropShadow, styles.sameRowTextbox]} placeholder="First Name" />
                    <View style={{flex: 0.5}}></View>
                    <Textbox style={[styles.textbox, styles.dropShadow, styles.sameRowTextbox]} placeholder="Last Name" />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', width: "80%"}}>
                    <Textbox style={[styles.textbox, styles.dropShadow]} placeholder="Email" />
                    <Textbox style={[styles.textbox, styles.dropShadow]} placeholder="Password" />
                    <Textbox style={[styles.textbox, styles.dropShadow]} placeholder="Confirm Password" />
                </View>
                <View style={{flex: 2, top: "15%"}}>
                    <Button 
                        onPress={()=>{navigation.navigate('Home')}}
                        title="Create Account"
                        textStyle={{textAlign: 'center'}}
                        />
                </View>
                <StatusBar style="auto" />
            </LinearGradient>
        </View>
      </LinearGradient>
    );
  }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'Column',
        flex: 1,
        alignItems: 'center',
    },
    textbox: {
        backgroundColor: "white", 
        height: "60%", 
        width: "80%",
        borderRadius: 5, 
        paddingHorizontal: "5%",
        alignSelf: 'center'
    },
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    sameRowTextbox: {width: Dimensions.get('window').width * 0.3, height: "30%"}
});
  