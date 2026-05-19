import { Stack } from "expo-router"

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          headerTitle: '',
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#010409',
          },
          headerTintColor: '#ffffff',
        }}
      />

      <Stack.Screen
        name="cadastro"
        options={{
          headerTitle: '',
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#010409',
          },
          headerTintColor: '#ffffff',
        }}
      />
    </Stack>
  )
}