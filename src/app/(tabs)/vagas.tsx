import { StyleSheet, Text, View } from 'react-native';

export default function vagas() {
    return (
        <View style={styleSheet.container}>
            <Text>Tela de Vagas</Text>
        </View>
    );
}

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#010409',
        justifyContent: 'center',
        alignItems: 'center',
    },
});