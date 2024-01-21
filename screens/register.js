import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegisterScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    const register = async()=> {
       setLoading(true);
       try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
       }catch(error){
        console.log(error);
       }finally{
        setLoading(false);
       }
    }

    return(
        
        <View>
            <Text>Name</Text>
            <TextInput placeholder = "Email" value={email} onChangeText = {(text) => setEmail(text)} />
            <Text>Email Address</Text>
            <Text>Password</Text>
            <TextInput placeholder = "Enter password" value = {password} onChangeText = {(text) => setPassword(text)} />
            <Button onPress = {() => register()} > 
                <Text>Register</Text> 
            </Button>
        </View>
    )
}