import { StyleSheet, TextInput } from "react-native"

export default function Input({...props}){
    return (
        <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 5,
    padding: 10,
    width: 200, 
    height: 40, 
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  }, 
})
