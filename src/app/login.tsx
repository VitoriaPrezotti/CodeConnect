import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import { login as loginUser } from '@/services/authService'
import { saveToken, saveUser } from '@/services/storageService'
import { sanitizeEmail, sanitizeString } from '@/utils/sanitizer'
import { validatePassword } from '@/utils/passwordValidator'
import { Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat'
import { Link, router } from 'expo-router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert,Image,KeyboardAvoidingView,Platform,ScrollView,StyleSheet,Text,TextInput,View } from 'react-native'

export default function Login() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  const [isLoading, setIsLoading] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm()

  const senhaRef = useRef<TextInput>(null)

  async function handleNextStep(data: any) {
    setIsLoading(true)

    try {
      const sanitizedEmail = sanitizeEmail(data.email)
      const sanitizedPassword = sanitizeString(data.password)

      const response = await loginUser({
        email: sanitizedEmail,
        password: sanitizedPassword,
      })

      if (response.error) {
        Alert.alert('Erro', response.error)
      } else if (response.data) {
        await saveToken(response.data.token)
        await saveUser(response.data.user)
        router.push('/(tabs)/telaprincipal_usuario')
      }
    } catch {
      Alert.alert('Erro', 'Erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!fontsLoaded) {
    return null
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: 'height' })}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Image
            source={require('@/assets/Logobranca.png')}
            style={styles.imagem}
            resizeMode="contain"
          />

          <Text style={styles.subtitulo}>Conecte - se</Text>

          <View style={styles.form}>
            <Text style={styles.titulo}>E-mail</Text>

            <Input
              error={errors.email?.message as string}
              formProps={{
                name: 'email',
                control,
                rules: {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                    message: 'E-mail inválido.',
                  },
                },
              }}
              inputProps={{
                placeholder: 'seu.email@exemplo.com',
                placeholderTextColor: '#999',
                keyboardType: 'email-address',
                autoCapitalize: 'none',
                onSubmitEditing: () => senhaRef.current?.focus(),
              }}
            />

            <View style={styles.senhaLinha}>
              <Text style={styles.titulo}>Senha</Text>

              <Link href="/recuperar-senha" style={styles.esqueceu}>
                Esqueceu sua senha?
              </Link>
            </View>

            <Input
              ref={senhaRef}
              error={errors.password?.message as string}
              formProps={{
                name: 'password',
                control,
                rules: {
                  required: 'Senha é obrigatória',
                  validate: (value: string) => {
                    const validation = validatePassword(value)
                    return validation.isValid || validation.errors[0]
                  },
                },
              }}
              inputProps={{
                placeholder: 'Senha',
                placeholderTextColor: '#999',
                onSubmitEditing: handleSubmit(handleNextStep),
                secureTextEntry: true,
              }}
            />

            <Button
              label={isLoading ? 'Entrando...' : 'Entrar'}
              style={styles.botaoEntrar}
              onPress={handleSubmit(handleNextStep)}
              disabled={isLoading}
            />
          </View>

          <View>
            <Text style={styles.cadastro}>
              Não tem uma conta?{' '}
              <Link href="/cadastro" style={styles.link}>
                Cadastre-se
              </Link>
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
    width: '100%',
    height: 140,
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 23,
    marginBottom: 50,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold',
  },

  titulo: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 18,
  },

  form: {
    gap: 12,
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
    marginTop: 24,
  },

  cadastro: {
    textAlign: 'center',
    marginTop: 44,
    color: '#ffffff',
  },

  link: {
    color: '#0077a3',
    fontWeight: '700',
  },
})