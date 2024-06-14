import HomeScreen from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import CreateAccount from './screens/CreateAccount';
import Archive from './screens/Archive';
import Profile from './screens/Profile';
import Scanner from './screens/Scanner';
import Generator from './screens/Generator';
import Generator2 from './screens/Generator2';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Lemonada': require('./assets/fonts/Lemonada.ttf'),
    'Lemonada-SemiBold' : require('./assets/fonts/Lemonada-SemiBold.ttf')
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} />
        <Stack.Screen name="Archive" component={Archive} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Generator" component={Generator} />
        <Stack.Screen name="Generator2" component={Generator2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}