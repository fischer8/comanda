import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function Button({children, ...props}) {
    return (
        <TouchableOpacity {...props}>
            <Text style={styles.button}> {children} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'blue',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 16
      }
})
