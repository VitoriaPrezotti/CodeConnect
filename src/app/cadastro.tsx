import { Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { Link } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/Button'

export default function login() {
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ ios:"padding", android:"height"})}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps = "handled">
            <View style={styles.container}>
                
                {/* Imagem */}
                <Image 
                source={require("@/assets/Logobranca.png")} style={styles.imagem} resizeMode="contain"
                />
                
                <Text style={styles.subtitulo}>Conecte -se</Text>

                <Text style={styles.entrar}>Criar Conta</Text>

                
                {/* Formulário */}
                <View style={styles.form}>
                <Input placeholder="seu.email@exemplo.com" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" />
                <Input placeholder="••••••••" placeholderTextColor="#999" secureTextEntry />
                <Input placeholder="••••••••" placeholderTextColor="#999" secureTextEntry />
                <Input placeholder="••••••••" placeholderTextColor="#999" secureTextEntry />
                <Input placeholder="••••••••" placeholderTextColor="#999" secureTextEntry />
                <Button label='Entrar' />
                </View>

                <View>
                <Text style={styles.cadastro}>Não tem uma conta?{' '} <Link href='/cadastro' style={styles.link}>Cadastre-se</Link></Text>
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
    paddingBottom: '100%', // Espaço no final
  },
  
  imagem: {
    width: "100%",
    height: 150, // Altura fixa ao invés de 50%
    marginTop: 150,
    marginBottom: 0,
  },
  
  subtitulo: {
    fontSize: 24,
    marginBottom: 50,
    color: '#ffffff',
    textAlign:'center',
  },

  entrar: {
    fontSize: 20,
    fontWeight: 800,
    marginLeft: 44,
    color: '#ffffff',
  },
  
  form: {
    marginHorizontal: 10, // Margens laterais
    gap: 13, // Espaço entre inputs
    marginLeft: 20,
  },

  cadastro:{
    textAlign: 'center',
    marginTop: 24,
    color:'#ffffff'
  },
  link:{
    color: '#0077a3',
    fontWeight: 700, 
  },
})