import { TextInput, StyleSheet, TextInputProps } from "react-native"

export function Input({...rest }: TextInputProps) {
    return <TextInput style={style.loginInput} {...rest} />
}

const style = StyleSheet.create({
    loginInput: {
        width: '88%',
        height: 53,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 23,
        marginTop:26,
        fontSize:17,
        fontWeight: '400',
    },
})