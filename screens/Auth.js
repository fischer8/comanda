import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/button';
import Input from '../components/input';

export default function Auth({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder='E-mail'/>
      <Input placeholder='Senha' secureTextEntry/>
      <Button onPress={() => navigation.navigate('Home')}>
        Entrar
      </Button>
      <TouchableOpacity >
        <Text>Criar conta</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 16,
    fontWeight: 'bold',
  },
});
