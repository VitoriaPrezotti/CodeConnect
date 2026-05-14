import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

type ButtonProps = TouchableOpacityProps & {
    label: string
    style?: ViewStyle
}

export function Button({ label, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.6} {...rest} >
            <Text style={styles.label}>{label}</Text>
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
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
})