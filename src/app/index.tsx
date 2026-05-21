import { Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native'
import { Link, router } from 'expo-router'
import { Button } from '@/components/Button'
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'


export default function Index() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  const handleEntrar = () => {
    router.push('/login')
  }

  const handleSSO = () => {
    router.push('/#')
  }

  const handleCadastro = () => {
    router.push('/cadastro')
  }

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select({ ios:"padding", android:"height"})}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps = "handled">
                <View style={styles.container}>
              
              {/* Imagem */}
              <Image 
              source={require("@/assets/Logobranca.png")} style={styles.imagem} resizeMode="contain"
              />  

              {/* Títulos */}
              <Text style={styles.subtitulo}>Conectando Talentos e Codificando{'           '}
              Soluções</Text>
              
              {/* Butão */}
              <View>
              <Button label='Entrar' onPress={handleEntrar} />
              <Button label='SSO' />
              <Button label='Criar Conta' onPress={handleCadastro} style={styles. botaoCadastro} textStyle={{color:'#ffff'}} />
              </View>

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
    height: 250, // Altura fixa ao invés de 50%
    marginTop: 85,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 50,
    color: '#ffffff',
    textAlign:'center',
    marginHorizontal: 17,
    fontFamily: 'Montserrat_600SemiBold',
  },
  botaoCadastro: {
    width: '88%',
    height: 53,
    backgroundColor:'#011526',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 23,
    marginTop:26,
    marginBottom:95,
  },
  termos:{
    textAlign: 'center',
    marginTop: 24,
    color:'#ffffff'
  },
  link:{
    color: '#0077a3',
    fontWeight: 700, 
  },
})