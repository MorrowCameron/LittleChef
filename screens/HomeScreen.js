import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button';
import BottomBar from '../components/bottomBar';
import { StatusBar } from 'expo-status-bar';
import { RED } from '@env';

export default function HomeScreen({navigation}) {
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
                        <Text style={{fontFamily: "Lemonada-SemiBold", fontSize: 30}}>Ingredients</Text>
                    </View>
                    <View style={{height: "0.5%", width: "80%", backgroundColor: RED}}></View>
                    <View style={{flex: 3, flexDirection: 'column-reverse', alignSelf: "center", marginVertical: "5%"}}>
                        <Text style={{textAlign: "center"}}>Hello World!</Text>

                    </View>
                    <StatusBar style="auto" />
                </LinearGradient>
            </View>
            <View style={{flex: 0.5}}>
                <Button 
                                onPress={()=>{navigation.navigate('Login')}}
                                title="Generate Recipe"
                                />
            </View>
            <View style={{flex: 1, width: "100%"}}>
                <BottomBar></BottomBar>
            </View>
            
        </LinearGradient>
        </View>
    );
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
  