import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle,TextStyle } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
    label: string
    style?: ViewStyle
    textStyle?: TextStyle
}

export function Button({ label, textStyle, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity style={[styles.container, rest.style]} activeOpacity={0.6} {...rest} >
            <Text style={[styles.label, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '88%',
        height: 53,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 23,
        marginTop:26,
    },
    label:{
        color: '#010409',
        fontSize: 16,
        fontWeight: '600',
    },
})