import { useAuth } from '@/contexts/AuthContext'
import { AntDesign, Feather } from '@expo/vector-icons'
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

export default function Perfil() {
  const { user, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: '',
  })

  function handleSave() {
    // Aqui você chamaria o serviço para atualizar o perfil
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!')
    setIsEditing(false)
  }

  async function handleLogout() {
    Alert.alert(
      'Sair da conta',
      'Tem certeza que deseja sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            try {
              await logout()
            } catch (error) {
              Alert.alert('Erro', 'Erro ao fazer logout')
            }
          },
        },
      ]
    )
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: 'height' })}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Perfil</Text>
            <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={styles.editButton}>
              <Feather name={isEditing ? 'x' : 'edit'} size={22} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Feather name="user" size={40} color="#010409" />
            </View>
            <TouchableOpacity style={styles.changeAvatar}>
              <Feather name="camera" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Nome de Usuário</Text>
            <TextInput
              style={[styles.input, !isEditing && styles.inputDisabled]}
              value={isEditing ? editedUser.username : user.username}
              onChangeText={(text) => setEditedUser({ ...editedUser, username: text })}
              editable={isEditing}
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={[styles.input, styles.inputDisabled]}
              value={user.email}
              editable={false}
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={[styles.input, styles.textArea, !isEditing && styles.inputDisabled]}
              value={isEditing ? editedUser.bio : user.bio || ''}
              onChangeText={(text) => setEditedUser({ ...editedUser, bio: text })}
              editable={isEditing}
              placeholder="Conte um pouco sobre você..."
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
            />

            {isEditing && (
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Salvar Alterações</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <AntDesign name="logout" size={20} color="#ef4444" />
            <Text style={styles.logoutButtonText}>Sair da Conta</Text>
          </TouchableOpacity>
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
    paddingTop: 40,
    paddingBottom: 40,
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },
  editButton: {
    padding: 8,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  changeAvatar: {
    backgroundColor: '#0788b5',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    gap: 20,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#11151b',
    borderWidth: 1,
    borderColor: '#252b35',
    borderRadius: 10,
    padding: 16,
    color: '#ffffff',
    fontSize: 16,
  },
  inputDisabled: {
    backgroundColor: '#0a0d12',
    borderColor: '#1a1f2a',
    color: '#666',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#0788b5',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#1a1f2a',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ef4444',
  },
  logoutButtonText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '700',
  },
})
