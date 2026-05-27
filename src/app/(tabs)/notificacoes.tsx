import { getNotifications } from '@/services/notificationService';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Notificacoes() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    try {
      const response = await getNotifications();
      if (response.data) {
        setNotifications(response.data);
      } else if (response.error) {
        Alert.alert('Erro', response.error);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao carregar notificações');
    } finally {
      setIsLoading(false);
    }
  }

  function onRefresh() {
    setRefreshing(true);
    loadNotifications().then(() => setRefreshing(false));
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0788b5" style={styles.loading} />
      </View>
    );
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'application':
        return '📋';
      case 'success':
        return '✅';
      case 'job':
        return '💼';
      case 'message':
        return '💬';
      case 'reminder':
        return '🔔';
      default:
        return '📌';
    }
  };

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
      <Text style={styles.title}>Notificações</Text>
      
      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma notificação</Text>
          <Text style={styles.emptySubtext}>Você está por dentro de tudo!</Text>
        </View>
      ) : (
        notifications.map((notification) => (
          <TouchableOpacity 
            key={notification.id} 
            style={[
              styles.card,
              !notification.read && styles.unreadCard
            ]}
          >
            <View style={styles.header}>
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{getNotificationIcon(notification.type)}</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.notificationTitle}>{notification.title}</Text>
                <Text style={styles.message}>{notification.message}</Text>
                <Text style={styles.time}>{notification.time}</Text>
              </View>
              {!notification.read && <View style={styles.unreadDot} />}
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
  card: {
    backgroundColor: '#11151b',
    borderWidth: 1,
    borderColor: '#252b35',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  unreadCard: {
    backgroundColor: '#1a1f2a',
    borderColor: '#0788b5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#0788b5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  notificationTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  message: {
    color: '#b5b5b5',
    fontSize: 14,
    marginBottom: 8,
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#0788b5',
    marginTop: 6,
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