import { StyleSheet, Text, View } from 'react-native';

export default function Projetos() {
    return (
        <View style={styleSheet.container}>
            <Text>Tela de Projetos</Text>
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