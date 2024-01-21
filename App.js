import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import SignScreen from './screens/authenticate';
import RegisterScreen from './screens/register';
import Barcoding from './screens/scanning';

function HomeScreen({navigation}){
  return(
    <View>
      <Text>Welcome to Loyalty Rewards!</Text>
      <Button title='Register'  onPress={()=>navigation.navigate('Register')} />
      <Button title = 'Barcode Scanner' onPress={() => navigation.navigate('Barcode')} />
    </View>
  )
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name = 'HomeScreen' component={HomeScreen} />
        <Stack.Screen name='SignScreen' component={SignScreen} />
        <Stack.Screen name = 'Register' component={RegisterScreen} />
        <Stack.Screen name = 'Barcode' component = {Barcoding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});