import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/index';

export default function App() {
  return (
    <SafeAreaView style={style.screen}>
        <StatusBar barStyle="dark-content" />
        <Home />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1
  }
})