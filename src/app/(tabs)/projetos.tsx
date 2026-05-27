import { getMyProjects } from '@/services/projectService';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Projetos() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [searchQuery, projects]);

  async function loadProjects() {
    try {
      const response = await getMyProjects();
      if (response.data) {
        setProjects(response.data);
      } else if (response.error) {
        Alert.alert('Erro', response.error);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar projetos');
    } finally {
      setIsLoading(false);
    }
  }

  function onRefresh() {
    setRefreshing(true);
    loadProjects().then(() => setRefreshing(false));
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0788b5" style={styles.loading} />
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#0788b5"
          colors={['#0788b5']}
        />
      }
    >
      <Text style={styles.title}>Meus Projetos</Text>
      
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#9ca3af" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar projetos..."
          placeholderTextColor="#9ca3af"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Feather name="x" size={18} color="#9ca3af" />
          </TouchableOpacity>
        )}
      </View>
      
      {filteredProjects.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            {searchQuery ? 'Nenhum projeto encontrado' : 'Nenhum projeto encontrado'}
          </Text>
          <Text style={styles.emptySubtext}>
            {searchQuery ? 'Tente buscar com outros termos' : 'Crie seu primeiro projeto para começar'}
          </Text>
        </View>
      ) : (
        filteredProjects.map((project) => (
          <TouchableOpacity key={project.id} style={styles.card}>
            <View style={styles.header}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{project.author.charAt(0)}</Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.author}>{project.author}</Text>
                <Text style={styles.role}>{project.role}</Text>
              </View>
            </View>
            
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.description}>{project.description}</Text>
            
            <View style={styles.tags}>
              {project.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>
            
            <View style={styles.stats}>
              <Text style={styles.stat}>⭐ {project.stars}</Text>
              <Text style={styles.stat}>👁️ {project.views}</Text>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010409',
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 40,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#11151b',
    borderWidth: 1,
    borderColor: '#252b35',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#11151b',
    borderWidth: 1,
    borderColor: '#252b35',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0788b5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  userInfo: {
    flex: 1,
  },
  author: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  role: {
    color: '#b5b5b5',
    fontSize: 14,
  },
  projectTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  description: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 12,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    color: '#008dc5',
    borderWidth: 1,
    borderColor: '#008dc5',
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
  },
  stats: {
    flexDirection: 'row',
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: '#20242c',
    paddingTop: 12,
  },
  stat: {
    color: '#666',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  emptySubtext: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
  },
});