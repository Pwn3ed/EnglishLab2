import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import { AntDesign } from '@expo/vector-icons';

export function HomeScreen({ navigation }) {
  function navigateLogin() {
    navigation.navigate('LoginScreen')
  }

  return (<>
    <Header/>
    <View className='body flex-1 items-center justify-center bg-purple-950'>
        <StatusBar/>

        <View className='flex-row items-center w-full'>
            <AntDesign name="search1" size={24} color="white" />
            <TextInput className='bg-white rounded w-11/12 m-2 p-2' placeholder='Pesquise aqui'/>
        </View>

        <TouchableOpacity className='bg-white rounded p-2 m-2 w-40 items-center' onPress={navigateLogin}>
          <Text className='text-black'>Go to Login Screen</Text>
        </TouchableOpacity>

    </View>
  </>);
}
