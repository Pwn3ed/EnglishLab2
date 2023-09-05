import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Routes } from './src/routes';
import { Header } from './src/components/Header';

export default function App() {
  return (<>
    <Routes/>
  </>);
}
