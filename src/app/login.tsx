import { Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput } from 'react-native'
import { Link, router } from 'expo-router'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/input'
import { Button } from '@/components/Button'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'

export default function login() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  const { control, handleSubmit, formState: { errors } } = useForm();
  function handleNextStep(data: any) {
    console.log(data);
    router.push('/(tabs)/telaprincipal_usuario')
  }
  const senhaRef = useRef<TextInput>(null);

  if (!fontsLoaded) {
    return null
  }

  const handleEntrar = () => {
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

                <Text style={styles.subtitulo}>Conecte - se</Text>
                
                <View style={styles.form}>
                <Text style={styles.titulo}>E-mail</Text>

                <Input
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
                  onSubmitEditing: () => senhaRef.current?.focus(),
                }}
                />

                <View style={styles.senhaLinha}>
                  <Text style={styles.titulo}>Senha</Text>
                  <Link href="/#" style={styles.esqueceu}>Esqueceu sua senha?</Link>
                </View>

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

                <Button label='Entrar' style={styles.botaoEntrar} onPress={handleSubmit(handleNextStep)}/>
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
    paddingHorizontal: 22,
    paddingBottom: 40,
  },
  
  imagem: {
    width: "100%",
    height: 140, // Altura fixa ao invés de 50%
    marginTop: 20,
  },
  
  subtitulo: {
    fontSize: 23,
    marginBottom: 50,
    color: '#ffffff',
    textAlign:'center',
    fontFamily: 'Montserrat_600SemiBold',
  },

  titulo:{
    color:'#ffffff',
    fontWeight: 700,
    fontSize:18,
  },
  
  form: {
    gap: 12, // Espaço entre inputs
  },

  senhaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },

  esqueceu: {
    color: '#008dc5',
    fontSize: 13,
    fontWeight: 700,
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

  cadastro:{
    textAlign: 'center',
    marginTop: 44,
    color:'#ffffff'
  },
  link:{
    color: '#0077a3',
    fontWeight: 700, 
  },
})