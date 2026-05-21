import { Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
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
                

                <Text style={styles.entrar}>Criar Conta</Text>

                
                {/* Formulário */}
                <View style={styles.form}>
                <Input placeholder="Nome do Usuário" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" />
                <Input placeholder="E-mail" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" />
                <Input placeholder="Data de Nascimento" placeholderTextColor="#999" keyboardType="email-address" autoCapitalize="none" />
                <Input placeholder="CPF" placeholderTextColor="#999"  />
                <Input placeholder="Senha" placeholderTextColor="#999" secureTextEntry />

                <Button label='Criar uma conta' style={styles.botaoEntrar}/>
                </View>

                <View style={styles.divisor}/>
                <Text style={styles.ou}>ou conecte-se com</Text>

                <TouchableOpacity style={styles.botaoGoogle}>
                  <AntDesign name="google" size={22} color="white" />

                  <Text style={styles.textoGoogle}>
                    Continuar com Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoApple}>
                  <FontAwesome name="apple" size={26} color="black" />

                  <Text style={styles.textoApple}>
                    Continuar com Apple
                  </Text>
                </TouchableOpacity>

                <View>
                <Text style={styles.termos}>
                Ao assinar, você concorda com os{' '}
                <Link href='/#' style={styles.link}>Termos de uso</Link> e{'            '}
                <Link href='/#' style={styles.link}>Política de Privacidade</Link>.
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
    paddingBottom: 40,
  },
  
  imagem: {
    width: "100%",
    height: 150, // Altura fixa ao invés de 50%
    marginTop: 40,
    marginBottom: 50,
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

  botaoEntrar: {
    width: '88%',
    height: 53,
    backgroundColor: '#0788b5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 23,
    marginTop:24,
  },

  divisor: {
    height: 1,
    backgroundColor: '#022033',
    marginTop: 35,
    marginHorizontal: -25,
  },

  ou: {
    color: '#777',
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 32,
    fontSize: 14,
    fontWeight: 700,
  },

  botaoGoogle: {
  width: '84%',
  height: 52,
  marginHorizontal: 25,
  marginTop: 0,
  backgroundColor: '#061927',
  borderWidth: 1,
  borderColor: '#ffffff',
  borderRadius: 30,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  },

  textoGoogle: {
    color: '#ffffff',
    fontSize: 17,
  },

  botaoApple: {
  width: '84%',
  height: 52,
  marginHorizontal: 25,
  marginTop: 13,
  backgroundColor: '#eeeeee',
  borderRadius: 30,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  },

  textoApple: {
    color: '#222222',
    fontSize: 17,
  },

  termos:{
    textAlign: 'center',
    marginTop: 29,
    color:'#ffffff'
  },

  link:{
    color: '#0077a3',
    fontWeight: 700, 
  },
})