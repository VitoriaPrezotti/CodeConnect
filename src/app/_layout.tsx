<<<<<<< HEAD
import { AuthProvider } from "@/contexts/AuthContext"
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
import { Stack } from "expo-router"

export default function Layout() {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <Stack>
=======
    <Stack>
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
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
<<<<<<< HEAD
          animation: 'slide_from_right',
          animationDuration: 300,
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
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
<<<<<<< HEAD
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
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
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
<<<<<<< HEAD
          animation: 'fade',
          animationDuration: 300,
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}

      />
    </Stack>
<<<<<<< HEAD
    </AuthProvider>
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
  )
}