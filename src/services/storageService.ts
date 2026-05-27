import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@codeconnect_token';
const USER_KEY = '@codeconnect_user';

export interface User {
  id: string;
  username: string;
  email: string;
}

export async function saveToken(token: string): Promise<void> {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error saving token:', error);
    throw error;
  }
}

export async function getToken(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
}

export async function removeToken(): Promise<void> {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token:', error);
    throw error;
  }
}

export async function saveUser(user: User): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
}

export async function getUser(): Promise<User | null> {
  try {
    const userJson = await AsyncStorage.getItem(USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
}

export async function removeUser(): Promise<void> {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error removing user:', error);
    throw error;
  }
}

export async function clearAll(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
  } catch (error) {
    console.error('Error clearing storage:', error);
    throw error;
  }
}
