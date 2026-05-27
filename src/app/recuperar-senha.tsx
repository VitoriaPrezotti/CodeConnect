import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import { forgotPassword } from '@/services/authService'
import { sanitizeEmail } from '@/utils/sanitizer'
import { Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function RecuperarSenha() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  const [isLoading, setIsLoading] = useState(false)

  const { control, handleSubmit, formState: { errors } } = useForm()

  async function handleForgotPassword(data: any) {
    setIsLoading(true)
    try {
      const sanitizedEmail = sanitizeEmail(data.email)
      
      const response = await forgotPassword(sanitizedEmail)
      
      if (response.error) {
        Alert.alert('Erro', response.error)
      } else if (response.data) {
        Alert.alert(
          'Sucesso',
          'Um link de recuperação foi enviado para seu e-mail.',
          [
            {
              text: 'OK',
              onPress: () => router.replace('/login'),
            },
          ]
        )
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao solicitar recuperação de senha')
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
          <Text style={styles.titulo}>Recuperar Senha</Text>
          <Text style={styles.subtitulo}>
            Digite seu e-mail para receber um link de recuperação
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>E-mail</Text>
            <Input
              error={errors.email?.message as string}
              formProps={{
                name: 'email',
                control,
                rules: {
                  required: 'E-mail é obrigatório',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'E-mail inválido',
                  },
                },
              }}
              inputProps={{
                placeholder: "seu@email.com",
                placeholderTextColor: "#999",
                keyboardType: "email-address",
                autoCapitalize: "none",
              }}
            />

            <Button
              label={isLoading ? 'Enviando...' : 'Enviar Link'}
              onPress={handleSubmit(handleForgotPassword)}
              style={styles.botao}
              disabled={isLoading}
            />

            <View style={styles.voltarContainer}>
              <Link href="/login" style={styles.link}>
                <Text style={styles.voltar}>← Voltar para o login</Text>
              </Link>
            </View>
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
    paddingTop: 60,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 12,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subtitulo: {
    fontSize: 16,
    color: '#999',
    marginBottom: 40,
    lineHeight: 24,
  },
  form: {
    gap: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  botao: {
    width: '88%',
    height: 53,
    backgroundColor: '#0788b5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal: 23,
    marginTop: 24,
  },
  voltarContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  link: {
    textDecorationLine: 'none',
  },
  voltar: {
    color: '#0788b5',
    fontSize: 16,
    fontWeight: '700',
  },
})
