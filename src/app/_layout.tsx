import { Stack } from "expo-router"

export default function Layout() {
  return (
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
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />

      <Stack.Screen
        name="telaprincipal_usuario"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#010409',
          },
        }}
      />
    </Stack>
  )
}