import { Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/Button'
import React from 'react'

export default function cadastro() {
  const [aceitaEmail,setAceitaEmail] = useState(false)

  const handleCriarConta = () => {
      router.push('/telaprincipal_usuario')
    }

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
                <Input placeholder="E-mail" placeholderTextColor="#999"  />
                <Input placeholder="Data de Nascimento" placeholderTextColor="#999" />
                <Input placeholder="CPF" placeholderTextColor="#999" keyboardType='numeric' />
                <Input placeholder="Senha" placeholderTextColor="#999" secureTextEntry />

                <Button label='Criar uma conta' style={styles.botaoEntrar} onPress={handleCriarConta}/>
                </View>

                <TouchableOpacity
                  style={styles.checkboxLinha}
                  activeOpacity={0.7}
                  onPress={() => setAceitaEmail(!aceitaEmail)}
                  >
                  <View style={styles.checkbox}>
                    {aceitaEmail && <AntDesign name="check" size={17} color="#0788b5" />}
                  </View>
                  <Text style={styles.checkboxTexto}>Receber por e-mail atualizações sobre anúncios e {'\n'}novas vagas disponíveis.</Text>

                </TouchableOpacity>
                
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
    marginTop: 30,
    marginBottom: 60,
  },

  entrar: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 18,
    color: '#ffffff',
  },
  
  form: {
    gap: 21, // Espaço entre inputs
  },

  check: {
  fontWeight: '800',
  textAlign: 'center',
},

   checkboxLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginRight: 8,
  },

  checkboxTexto: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
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