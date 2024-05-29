import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from './components/button';

export default function App() {
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
          onPress={()=>{}}
          title="Press Me"
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
