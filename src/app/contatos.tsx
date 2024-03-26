import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pagina dos contatos!</Text>

      <Image style={styles.imagens}
        source={require('../../assets/esmalte2.jpg')}
      />
      <Link style={styles.btn} href={"/"}>Inicio</Link>
      <Link style={styles.btn} href={"/sobre"}>Sobre</Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

