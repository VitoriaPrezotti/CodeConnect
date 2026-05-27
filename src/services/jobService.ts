import { apiRequest, ApiResponse } from './api';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  tags: string[];
  posted: string;
  description?: string;
  requirements?: string[];
}

export async function getJobs(): Promise<ApiResponse<Job[]>> {
  return apiRequest<Job[]>('/jobs', {
    method: 'GET',
  });
}

export async function getJobById(id: string): Promise<ApiResponse<Job>> {
  return apiRequest<Job>(`/jobs/${id}`, {
    method: 'GET',
  });
}

export async function applyToJob(id: string): Promise<ApiResponse<void>> {
  return apiRequest<void>(`/jobs/${id}/apply`, {
    method: 'POST',
  });
}

export async function getMyApplications(): Promise<ApiResponse<Job[]>> {
  return apiRequest<Job[]>('/jobs/applications', {
    method: 'GET',
  });
}

export async function searchJobs(query: string, filters?: {
  location?: string;
  type?: string;
  tags?: string[];
}): Promise<ApiResponse<Job[]>> {
  const params = new URLSearchParams();
  if (query) params.append('q', query);
  if (filters?.location) params.append('location', filters.location);
  if (filters?.type) params.append('type', filters.type);
  if (filters?.tags && filters.tags.length > 0) params.append('tags', filters.tags.join(','));

  return apiRequest<Job[]>(`/jobs/search?${params.toString()}`, {
    method: 'GET',
  });
}
