import { apiRequest, ApiResponse } from './api';

export type NotificationType = 'application' | 'success' | 'job' | 'message' | 'reminder';

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  read: boolean;
  createdAt: string;
}

export async function getNotifications(): Promise<ApiResponse<Notification[]>> {
  return apiRequest<Notification[]>('/notifications', {
    method: 'GET',
  });
}

export async function getUnreadCount(): Promise<ApiResponse<{ count: number }>> {
  return apiRequest<{ count: number }>('/notifications/unread-count', {
    method: 'GET',
  });
}

export async function markAsRead(id: string): Promise<ApiResponse<void>> {
  return apiRequest<void>(`/notifications/${id}/read`, {
    method: 'PUT',
  });
}

export async function markAllAsRead(): Promise<ApiResponse<void>> {
  return apiRequest<void>('/notifications/read-all', {
    method: 'PUT',
  });
}

export async function deleteNotification(id: string): Promise<ApiResponse<void>> {
  return apiRequest<void>(`/notifications/${id}`, {
    method: 'DELETE',
  });
}
