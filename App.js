import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Daco_832227.png')}
        style={{ width: 140, height: 140 }}
      />

      <Text style={styles.text1}>Cadastre seu jogador</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
      />
      <TextInput
        style={styles.input}
        placeholder="Numero da camisa"
      />

      <Button
        style={styles.button}
        title='Cadastrar'
        onPress={() => alert('NOVO CRAQUE NO MENGÃO!!')}

      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
    alignItems: 'center',
  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    left: 100,
  },

  input: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
    borderRadius: 16,
  },

  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 5,
  },
});
