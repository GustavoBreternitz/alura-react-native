
import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';
import Cesta from './src/Views/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from  '@expo-google-fonts/montserrat'
export default function App() {
  const [fontLoaded] = useFonts({
    "regular": Montserrat_400Regular,
    "bold": Montserrat_700Bold
  });

  if (!fontLoaded) {
    return <View />
  }
  return (
    // SafeAreaView é bom para o IOS pois ele não tem uma barra fixa 
    // e aqui consideramos apenas o disponível para texto
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Cesta />
      </SafeAreaView>
  );
}