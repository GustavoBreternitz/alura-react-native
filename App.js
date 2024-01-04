
import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';
import Cesta from './src/Views/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from  '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading';
import { ScrollView } from 'react-native';
export default function App() {
  const [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontLoaded) {
    return <AppLoading />
  }
  return (
    // SafeAreaView é bom para o IOS pois ele não tem uma barra fixa 
    // e aqui consideramos apenas o disponível para texto
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <Cesta />
      </ScrollView>
  );
}