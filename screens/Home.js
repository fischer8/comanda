import { StyleSheet, Text, View } from "react-native";
import Button from "../components/button";
import Input from "../components/input";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comanda</Text>
      <Input placeholder='Código da comanda' />
      <Button>Confirmar</Button>
    </View>
  )
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
  }
})
