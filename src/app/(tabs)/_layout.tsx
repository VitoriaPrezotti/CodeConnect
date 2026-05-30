import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs 
        screenOptions={{ 
            headerShown: false, 
            sceneStyle: {
                backgroundColor: '#010409',
            },
            tabBarStyle: {
                backgroundColor: '#010409',
                borderTopColor: '#1f2937',
                height: 70,
            },
            tabBarActiveTintColor: '#008dc5',
            tabBarInactiveTintColor: '#ffffff',
        }}
        >
            
            <Tabs.Screen 
            name="telaprincipal_usuario"
            options={{
                title:"inicio",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
            }}
            />

            <Tabs.Screen 
            name="projetos"
            options={{
                title:"projetos",
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="code" size={size} color={color} />
                ),
                
            }}
            />

            <Tabs.Screen 
            name="adicionar"
            options={{
                title:"adicionar",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="plus-circle" size={size} color={color} />
                ),
                
            }}
            />

            <Tabs.Screen 
            name="notificacoes"
            options={{
                title:"notificações",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="bell" size={size} color={color} />
                ),
                
            }}
            />

            <Tabs.Screen 
            name="vagas"
            options={{
                title:"vagas",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="briefcase" size={size} color={color} />
                ),
                
            }}
            />
        </Tabs>
    )
}