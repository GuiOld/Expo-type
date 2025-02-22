import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import Botao from './componentes/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Open up App.tsx to start working on your app!</Text>
      <Botao titulo="Clique aqui"
      onPress={()=>{Alert.alert("Atenção","Botão Clicado")}}></Botao>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 30,
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.5,

  },

  titulo: {
    color: '#FFF',
    fontSize: 17.5
  }
});
