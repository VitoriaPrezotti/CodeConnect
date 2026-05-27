import { StyleSheet, Text, View } from 'react-native';

export default function Notificacoes() {
    return (
        <View style={styleSheet.container}>
            <Text>Tela de notificações</Text>
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