import { Button } from '@/components/Button'
import { Input } from '@/components/input'
import { createProject } from '@/services/projectService'
import { router } from 'expo-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function Adicionar() {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCreateProject(data: any) {
    setIsLoading(true)

    try {
      const tagsArray = data.tags
        .split(',')
        .map((tag: string) => tag.trim())
        .filter((tag: string) => tag)

      const response = await createProject({
        title: data.title,
        description: data.description,
        tags: tagsArray,
      })

      if (response.error) {
        Alert.alert('Erro', response.error)
      } else if (response.data) {
        Alert.alert('Sucesso', 'Projeto criado com sucesso!')
        router.push('/(tabs)/projetos')
      }
    } catch {
      Alert.alert('Erro', 'Erro ao criar projeto. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: 'height' })}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.title}>Criar Novo Projeto</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Título do Projeto</Text>

            <Input
              error={errors.title?.message as string}
              formProps={{
                name: 'title',
                control,
                rules: {
                  required: 'Título é obrigatório',
                  minLength: {
                    value: 5,
                    message: 'Título deve ter pelo menos 5 caracteres',
                  },
                },
              }}
              inputProps={{
                placeholder: 'Ex: Dashboard Analytics Pro',
                placeholderTextColor: '#999',
              }}
            />

            <Text style={styles.label}>Descrição</Text>

            <Input
              error={errors.description?.message as string}
              formProps={{
                name: 'description',
                control,
                rules: {
                  required: 'Descrição é obrigatória',
                  minLength: {
                    value: 20,
                    message: 'Descrição deve ter pelo menos 20 caracteres',
                  },
                },
              }}
              inputProps={{
                placeholder: 'Descreva seu projeto...',
                placeholderTextColor: '#999',
                multiline: true,
                numberOfLines: 4,
              }}
            />

            <Text style={styles.label}>Tags separadas por vírgula</Text>

            <Input
              error={errors.tags?.message as string}
              formProps={{
                name: 'tags',
                control,
                rules: {
                  required: 'Tags são obrigatórias',
                },
              }}
              inputProps={{
                placeholder: 'React, TypeScript, Node.js',
                placeholderTextColor: '#999',
              }}
            />

            <Button
              label={isLoading ? 'Criando...' : 'Criar Projeto'}
              onPress={handleSubmit(handleCreateProject)}
              style={styles.button}
              disabled={isLoading}
            />
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
    paddingTop: 40,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 30,
    textAlign: 'center',
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

  button: {
    marginTop: 20,
    backgroundColor: '#0788b5',
  },
})