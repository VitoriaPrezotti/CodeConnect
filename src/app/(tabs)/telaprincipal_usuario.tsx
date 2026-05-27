import { useAuth } from '@/contexts/AuthContext';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function telaPrincipal_usuario() {
    const { logout, user } = useAuth();

    async function handleLogout() {
        Alert.alert(
            'Sair da conta',
            'Tem certeza que deseja sair?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Sair',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await logout();
                        } catch (error) {
                            Alert.alert('Erro', 'Erro ao fazer logout');
                        }
                    },
                },
            ]
        );
    }

    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ ios:"padding", android:"height"})}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps = "handled">
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={styles.avatar}>
                                <Feather name="user" size={22} color="#010409" />
                            </View>

                            <View style={styles.searchBox}>
                                <Feather name="search" size={18} color="#9ca3af" />

                                <TextInput
                                placeholder="Pesquisar"
                                placeholderTextColor="#9ca3af"
                                style={styles.searchInput}
                                />
                            </View>

                            <TouchableOpacity onPress={() => router.push('/perfil')} style={styles.profileButton}>
                                <Feather name="settings" size={22} color="#ffffff" />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                                <Feather name="log-out" size={22} color="#ffffff" />
                            </TouchableOpacity>
                        </View>

                    <View style={styles.card}>
                    <View style={styles.userRow}>
                        <View style={styles.smallAvatar}>
                        <Feather name="user" size={18} color="#010409" />
                        </View>

                        <View>
                        <Text style={styles.name}>{user.username || 'Usuário'}</Text>
                        <Text style={styles.role}>
                            {user.email || 'email@exemplo.com'}
                        </Text>
                        </View>
                    </View>

                    <Text style={styles.title}>Dashboard Analytics Pro</Text>

                    <Text style={styles.description}>
                        Dashboard completo para visualização de dados em tempo real com gráficos interativos,
                        métricas de performance e integração com múltiplas APIs.
                    </Text>

                    <Image
                        source={require("@/assets/trabalhando.png")}
                        style={styles.cardImage}
                        resizeMode="cover"
                    />

                    <View style={styles.tags}>
                        <Text style={styles.tag}>React</Text>
                        <Text style={styles.tag}>TypeScript</Text>
                        <Text style={styles.tag}>Recharts</Text>
                        <Text style={styles.tag}>TailwindCSS</Text>
                    </View>

                    <View style={styles.stats}>
                        <AntDesign name="star" size={16} color="#666" />
                        <Text style={styles.statText}>30</Text>

                        <AntDesign name="eye" size={16} color="#666" />
                        <Text style={styles.statText}>60</Text>

                        <Feather name="message-circle" size={16} color="#666" />
                        <Text style={styles.statText}>10</Text>
                    </View>
                    </View>

                    <View style={styles.card}>
                    <View style={styles.userRow}>
                        <View style={styles.smallAvatar}>
                        <Feather name="user" size={18} color="#010409" />
                        </View>

                        <View>
                        <Text style={styles.name}>Pedro Lima</Text>
                        <Text style={styles.role}>
                            Full Stack Developer | Node.js & Python
                        </Text>
                        </View>
                    </View>

                    <Text style={styles.title}>API Gateway Microservices</Text>

                    <Text style={styles.description}>
                        Arquitetura de microserviços com gateway centralizado,
                        autenticação JWT, rate limiting e monitoramento em tempo real.
                    </Text>
                    </View>

                    
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#010409',
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 40,
  },

  header: {
  height: 58,
  flexDirection: 'row',
  alignItems: 'center',
  gap: 13,
},

avatar: {
  width: 39,
  height: 39,
  borderRadius: 20,
  backgroundColor: '#e5e5e5',
  alignItems: 'center',
  justifyContent: 'center',
},

searchBox: {
  flex: 1,
  height: 36,
  borderRadius: 9,
  borderWidth: 1,
  borderColor: '#1f2937',
  backgroundColor: '#11151b',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  gap: 8,
},

logoutButton: {
  padding: 8,
},

profileButton: {
  padding: 8,
  marginRight: 8,
},

searchInput: {
  flex: 1,
  color: '#ffffff',
  fontSize: 16,
  fontWeight: '700',
},

card: {
  backgroundColor: '#11151b',
  borderWidth: 1,
  borderColor: '#252b35',
  borderRadius: 10,
  padding: 12,
  marginTop: 14,
},

userRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},

smallAvatar: {
  width: 34,
  height: 34,
  borderRadius: 17,
  backgroundColor: '#e5e5e5',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 9,
},

name: {
  color: '#ffffff',
  fontSize: 14,
  fontWeight: '700',
},

role: {
  color: '#b5b5b5',
  fontSize: 14,
},

title: {
  color: '#ffffff',
  fontSize: 18,
  fontWeight: '800',
  marginBottom: 14,
},

description: {
  color: '#ffffff',
  fontSize: 14,
  fontWeight: '700',
  marginBottom: 20,
},

cardImage: {
  width: '100%',
  height: 170,
  borderRadius: 8,
  marginBottom: 12,
},

tags: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 6,
  marginBottom: 20,
},

tag: {
  color: '#008dc5',
  borderWidth: 1,
  borderColor: '#008dc5',
  borderRadius: 7,
  paddingHorizontal: 7,
  paddingVertical: 3,
  fontSize: 12,
},

stats: {
  borderTopWidth: 1,
  borderTopColor: '#20242c',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 5,
  paddingTop: 14,
},

statText: {
  color: '#666',
  marginRight: 10,
},

bottomBar: {
  height: 60,
  marginTop: 15,
  borderTopWidth: 1,
  borderTopColor: '#1f2937',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
},

addButton: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: '#022033',
  alignItems: 'center',
  justifyContent: 'center',
},

loadingText: {
  color: '#ffffff',
  fontSize: 16,
  textAlign: 'center',
},

})