import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.texto}>um gato</Text>
      <Image source={require('./assets/gato2.png')} style={styles.gato} resizeMode='cover'/>
      <Text style={styles.texto2}>apenas um gato</Text>
      <StatusBar style="light" animated/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1249be',
    alignSelf: 'center'
  },
  texto: {
    color: '#000000',
    fontWeight: 500,
    fontSize: 110,
    textAlignVertical: 'center'
  },
  texto2: {
    color: '#000000',
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
  },
  gato: {
    height:200,
    width:600,
  }
});
