import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pagina sobre a pagina!</Text>
      
      <Image style={styles.imagens}
        source={require('../../assets/esmalte1.png')}
      />
      <Link style={styles.btn} href={"/"}>Inicio</Link>
      <Link style={styles.btn} href={"/contatos"}>Contatos</Link>

      <StatusBar style="auto" />
    </View>
  );
}

