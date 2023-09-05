import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../components/Header";
import { useState } from "react";

export function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function navigateUser() {
        navigation.navigate('UserScreen')
        console.log(email)
        console.log(password)
    }
    function navigatePasswordRecovery() {
        navigation.navigate('PasswordRecoveryScreen')
    }

    return (<>

        <Header/>
        <View className='flex-1 items-center justify-center bg-purple-950'>


            <View className='flex-row items-center w-full'>
                <Text className='text-white'>E-mail</Text>
                <TextInput className='bg-white rounded w-10/12 m-2' placeholder="Digite seu e-mail" onChangeText={(email) => setEmail(email)} />
            </View>
            <View className='flex-row items-center w-full'>
                <Text className='text-white'>Senha</Text>
                <TextInput className='bg-white rounded w-10/12 m-2' placeholder="Digite sua senha" onChangeText={(password) => setPassword(password)} secureTextEntry={true}/>
            </View>

            <TouchableOpacity className='items-center' onPress={navigatePasswordRecovery}>
                <Text className='text-white my-2'>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity className='bg-white rounded p-2 m-2 w-40 items-center' onPress={navigateUser}>
                <Text className='text-black'>Login</Text>
            </TouchableOpacity>

        </View>
    </>)
}
