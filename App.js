import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Button from './components/button';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
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

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
