import React from "react";
import { Pressable, TextInput } from "react-native";
import { View } from "react-native-web";
import { Text } from "react-native";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';


export default function SignScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const authentication = auth;

    const login = async() => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return(
        <View>
            <Text>Email Address</Text>
            <TextInput value = {email} placeholder="Email Address" onChangeText={(text) => setEmail(text)}/>
            <Text>Password</Text>
            <TextInput secureTextEntry={true} value={password} placeholder="Enter password" onChangeText={(text) => setPassword(text)}/>
            <Button onPress = {() => login()}> 
                <Text>Sign In</Text> 
            </Button>
        </View>
    )
}