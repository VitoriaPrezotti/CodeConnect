import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  visible: boolean;
  onHide: () => void;
}

export function Toast({ message, type = 'success', duration = 3000, visible, onHide }: ToastProps) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        hideToast();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  const hideToast = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onHide());
  };

  if (!visible) return null;

  const backgroundColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#0788b5';
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          backgroundColor,
        },
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1000,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});
