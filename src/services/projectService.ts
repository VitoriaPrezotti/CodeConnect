import { apiRequest, ApiResponse } from './api';

export interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  tags: string[];
  stars: number;
  views: number;
  imageUrl?: string;
  createdAt: string;
}

export interface CreateProjectData {
  title: string;
  description: string;
  tags: string[];
}

export async function getProjects(): Promise<ApiResponse<Project[]>> {
  return apiRequest<Project[]>('/projects', {
    method: 'GET',
  });
}

export async function getProjectById(id: string): Promise<ApiResponse<Project>> {
  return apiRequest<Project>(`/projects/${id}`, {
    method: 'GET',
  });
}

export async function createProject(data: CreateProjectData): Promise<ApiResponse<Project>> {
  return apiRequest<Project>('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function updateProject(id: string, data: Partial<CreateProjectData>): Promise<ApiResponse<Project>> {
  return apiRequest<Project>(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deleteProject(id: string): Promise<ApiResponse<void>> {
  return apiRequest<void>(`/projects/${id}`, {
    method: 'DELETE',
  });
}

export async function getMyProjects(): Promise<ApiResponse<Project[]>> {
  return apiRequest<Project[]>('/projects/my', {
    method: 'GET',
  });
}
