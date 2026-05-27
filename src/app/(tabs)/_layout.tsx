<<<<<<< HEAD
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
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
<<<<<<< HEAD
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
=======
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
            }}
            />

            <Tabs.Screen 
            name="projetos"
            options={{
                title:"projetos",
<<<<<<< HEAD
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="code" size={size} color={color} />
                ),
=======
                
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
            }}
            />

            <Tabs.Screen 
            name="adicionar"
            options={{
                title:"adicionar",
<<<<<<< HEAD
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="pluscircle" size={size} color={color} />
                ),
=======
                
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
            }}
            />

            <Tabs.Screen 
            name="notificacoes"
            options={{
                title:"notificações",
<<<<<<< HEAD
                tabBarIcon: ({ color, size }) => (
                    <Feather name="bell" size={size} color={color} />
                ),
=======
                
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
            }}
            />

            <Tabs.Screen 
            name="vagas"
            options={{
                title:"vagas",
<<<<<<< HEAD
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="briefcase" size={size} color={color} />
                ),
=======
                
>>>>>>> 5fdb04897e2f0b8f4e8174094d061296b5a840bf
            }}
            />
        </Tabs>
    )
}