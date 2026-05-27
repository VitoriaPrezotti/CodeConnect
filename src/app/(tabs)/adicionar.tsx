import { StyleSheet, Text, View } from 'react-native';

export default function adicionar() {
    return (
        <View style={styleSheet.container}>
            <Text>Tela de adicionar</Text>
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