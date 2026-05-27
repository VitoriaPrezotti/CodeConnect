import { Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react'
import { Link, router } from 'expo-router'
import { Input } from '@/components/input'
import { Button } from '@/components/Button'
import React from 'react'
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'

export default function cadastro() {
  const [aceitaEmail,setAceitaEmail] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm();
    function handleNextStep(data: any) {
      console.log(data);
      router.push('/(tabs)/telaprincipal_usuario')
    }
    const emailRef = useRef<TextInput>(null);
    const cpfRef = useRef<TextInput>(null);
    const senhaRef = useRef<TextInput>(null);

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
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
                <Text style={styles.titulo}>Nome do usuário</Text>

                <Input
                error={errors.username?.message as string}
                 formProps={{
                   name: 'username',
                   control,
                   rules:{
                    required: 'Nome do usuário é obrigatório',
                    minLength: {
                      value: 10,
                      message: 'Nome do usuário deve ter pelo menos 10 caracteres'
                    }
                  }
                }}
                inputProps={{
                  placeholder: "Nome do Usuário",
                  placeholderTextColor: "#999",
                  onSubmitEditing: () => emailRef.current?.focus(),
                 }}
                />

                <Text style={styles.titulo}>E-mail</Text>
                
                <Input
                ref={emailRef}
                error={errors.email?.message as string}
                formProps={{
                  name: 'email',
                  control,
                  rules:{
                    required: 'E-mail é obrigatório',
                    pattern: {
                      value:  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                      message: 'E-mail inválido.'
                    }
                  }
                }}
                inputProps={{
                  placeholder: "seu.email@exemplo.com",
                  placeholderTextColor: "#999",
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                  onSubmitEditing: () => cpfRef.current?.focus(),
                }}
                />

                <Text style={styles.titulo}>CPF</Text>
              
                <Input
                 ref={cpfRef}
                 mask="cpf"
                 error={errors.cpf?.message as string}
                 formProps={{
                   name: 'cpf',
                   control,
                   rules:{
                     required: 'CPF é obrigatório',
                     pattern: {
                       value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                       message: 'CPF inválido.'
                     }
                   }
                 }}
                 inputProps={{
                   placeholder: "CPF",
                   placeholderTextColor: "#999",
                   keyboardType: 'numeric',
                   onSubmitEditing: () => senhaRef.current?.focus(),
                 }}
                />

                <Text style={styles.titulo}>Senha</Text>

                <Input 
                ref={senhaRef}
                error={errors.password?.message as string}
                formProps={{
                  name: 'password',
                  control,
                  rules:{
                    required: 'Senha é obrigatória',
                    minLength: {
                      value: 6,
                      message: 'Senha deve ter pelo menos 6 caracteres'
                    }
                  }
                }}
                inputProps={{
                  placeholder: "Senha",
                  placeholderTextColor: "#999",
                  onSubmitEditing: handleSubmit(handleNextStep), 
                  secureTextEntry: true
                }}
                />

                <Button label='Criar uma conta' style={styles.botaoEntrar} onPress={handleSubmit(handleNextStep)}/>
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
    height: 140, // Altura fixa ao invés de 50%
    marginTop: 20,
  },

  entrar: {
    fontSize: 27,
    marginBottom: 60,
    color: '#ffffff',
    textAlign:'center',
    fontFamily: 'Montserrat_600SemiBold',
  },
  
  form: {
    gap: 12, // Espaço entre inputs
  },

  titulo:{
    color:'#ffffff',
    fontWeight: 700,
    fontSize:18,
  },

  check: {
  fontWeight: '800',
  textAlign: 'center',
},

   checkboxLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
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
    height: 2,
    backgroundColor: '#011526',
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