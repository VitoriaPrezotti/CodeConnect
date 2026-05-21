import { TextInput, StyleSheet, TextInputProps } from "react-native"

export function Input({...rest }: TextInputProps) {
    return <TextInput style={style.loginInput} {...rest} />
}

const style = StyleSheet.create({
    loginInput: {
        height: 55,
        backgroundColor: '#ffffffef',
        paddingHorizontal: 12,
        borderRadius: 10,
        fontSize:19,
        fontWeight: '400',
    },
})