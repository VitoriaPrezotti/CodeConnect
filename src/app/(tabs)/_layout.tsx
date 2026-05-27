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
            }}
            />

            <Tabs.Screen 
            name="projetos"
            options={{
                title:"projetos",
                
            }}
            />

            <Tabs.Screen 
            name="adicionar"
            options={{
                title:"adicionar",
                
            }}
            />

            <Tabs.Screen 
            name="notificacoes"
            options={{
                title:"notificações",
                
            }}
            />

            <Tabs.Screen 
            name="vagas"
            options={{
                title:"vagas",
                
            }}
            />
        </Tabs>
    )
}