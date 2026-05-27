import { getJobs } from '@/services/jobService';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function vagas() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadJobs();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [searchQuery, jobs]);

  async function loadJobs() {
    try {
      const response = await getJobs();
      if (response.data) {
        setJobs(response.data);
      } else if (response.error) {
        Alert.alert('Erro', response.error);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar vagas');
    } finally {
      setIsLoading(false);
    }
  }

  function onRefresh() {
    setRefreshing(true);
    loadJobs().then(() => setRefreshing(false));
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
      <Text style={styles.title}>Vagas Disponíveis</Text>
      
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#9ca3af" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar vagas..."
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
      
      {filteredJobs.map((job) => (
        <TouchableOpacity key={job.id} style={styles.card}>
          <View style={styles.header}>
            <View style={styles.companyLogo}>
              <Text style={styles.companyLogoText}>{job.company.charAt(0)}</Text>
            </View>
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.company}>{job.company}</Text>
            </View>
          </View>
          
          <View style={styles.details}>
            <Text style={styles.detail}>📍 {job.location}</Text>
            <Text style={styles.detail}>💰 {job.salary}</Text>
            <Text style={styles.detail}>📅 {job.type}</Text>
          </View>
          
          <View style={styles.tags}>
            {job.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>{tag}</Text>
            ))}
          </View>
          
          <Text style={styles.posted}>{job.posted}</Text>
        </TouchableOpacity>
      ))}
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
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0788b5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  companyLogoText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700',
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  company: {
    color: '#b5b5b5',
    fontSize: 14,
  },
  details: {
    gap: 8,
    marginBottom: 12,
  },
  detail: {
    color: '#ffffff',
    fontSize: 14,
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
  posted: {
    color: '#666',
    fontSize: 12,
    textAlign: 'right',
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