import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '../components/button';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
    return (
      <LinearGradient
        colors = { ['#F4DDFF','#FFCFAE'] }
        start = { { x: 0, y: 0 } }
        end = { { x: 0, y: 1 } }
        style = { styles.container }
      >
          <Text>Hello World!</Text>
          <StatusBar style="auto" />
          <Button 
            onPress={()=>{navigation.navigate('Login')}}
            title="Move to Login"
             />
      </LinearGradient>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  