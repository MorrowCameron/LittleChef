import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button';
import Textbox from '../components/textbox';
import { StatusBar } from 'expo-status-bar';
import { RED } from "@env";

export default function LoginScreen({navigation}) {
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
                    <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 36}}>Log In</Text>
                </View>
                <View style={{height: "0.5%", width: "80%", backgroundColor: RED}}></View>
                <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', width: "80%", marginTop: "15%"}}>
                    <Textbox style={[styles.textbox, styles.dropShadow]} placeholder="Enter Email..." />
                    <Textbox style={[styles.textbox, styles.dropShadow]} placeholder="Enter Password..." />
                </View>
                <View style={{flex: 0.5}}>
                    <TouchableOpacity onPress={(() => Alert.alert("Dang, that sucks"))}>
                        <Text style={{color: "blue", textDecorationLine: 'underline'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <Button 
                        onPress={()=>{navigation.navigate('Home', {ingredients : []})}}
                        title="Log In"
                        textStyle={{textAlign: 'center'}}
                        />
                </View>
                <View style={{flex: 0.5}}></View>
                <View style={{flex: 1.3}}>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: "Lemonada", fontSize: 20}}>Don't have an account?</Text>
                    </View>
                    <View style={{flex: 1, width: "80%", alignSelf: "center"}}>
                        <Button 
                            onPress={()=>{navigation.navigate('CreateAccount')}}
                            title="Create Account"
                            textStyle={{textAlign: 'center'}}
                            />
                    </View>
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
        borderRadius: 10, 
        paddingHorizontal: "5%",
        width: "80%",
        alignSelf: 'center'
    },
    dropShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1
    }
});
  