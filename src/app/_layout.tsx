import { AuthProvider } from "@/contexts/AuthContext"
import { Stack } from "expo-router"

export default function Layout() {
  return (
    <AuthProvider>
      <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          headerTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#010409',
          },
          headerTintColor: '#ffffff',
          headerShadowVisible: false,
          animation: 'slide_from_right',
          animationDuration: 300,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />

      <Stack.Screen
        name="cadastro"
        options={{
          headerTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#010409',
          },
          headerTintColor: '#ffffff',
          headerShadowVisible: false,
          animation: 'slide_from_right',
          animationDuration: 300,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />

      <Stack.Screen
        name="recuperar-senha"
        options={{
          headerTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#010409',
          },
          headerTintColor: '#ffffff',
          headerShadowVisible: false,
          animation: 'slide_from_right',
          animationDuration: 300,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />

      <Stack.Screen
        name="perfil"
        options={{
          headerTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#010409',
          },
          headerTintColor: '#ffffff',
          headerShadowVisible: false,
          animation: 'slide_from_right',
          animationDuration: 300,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          animation: 'fade',
          animationDuration: 300,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}

      />
    </Stack>
    </AuthProvider>
  )
}