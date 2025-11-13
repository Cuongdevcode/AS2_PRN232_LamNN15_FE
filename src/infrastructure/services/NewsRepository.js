import apiClient from '../api/apiClient';
import { News } from '../../domain/entities/News';
import { INewsRepository } from '../../domain/repositories/INewsRepository';

/**
 * News Repository Implementation
 * Handles all news-related API calls
 */
export class NewsRepository extends INewsRepository {
  async getAll(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.category) params.append('category', filters.category);
      if (filters.status) params.append('status', filters.status);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.sort) params.append('sort', filters.sort);

      const response = await apiClient.get(`/news?${params.toString()}`);
      
      return response.data.data.map(newsData => new News(newsData));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch news');
    }
  }

  async getById(id) {
    try {
      const response = await apiClient.get(`/news/${id}`);
      return new News(response.data.data);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch news');
    }
  }

  async getByCategory(categoryId, limit = 10) {
    try {
      const response = await apiClient.get(`/news/category/${categoryId}?limit=${limit}`);
      return response.data.data.map(newsData => new News(newsData));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch news by category');
    }
  }

  async getFeatured(limit = 5) {
    try {
      const response = await apiClient.get(`/news/featured?limit=${limit}`);
      return response.data.data.map(newsData => new News(newsData));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch featured news');
    }
  }

  async getLatest(limit = 10) {
    try {
      const response = await apiClient.get(`/news/latest?limit=${limit}`);
      return response.data.data.map(newsData => new News(newsData));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch latest news');
    }
  }

  async create(newsData) {
    try {
      const response = await apiClient.post('/news', newsData);
      return new News(response.data.data);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create news');
    }
  }

  async update(id, newsData) {
    try {
      const response = await apiClient.put(`/news/${id}`, newsData);
      return new News(response.data.data);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update news');
    }
  }

  async delete(id) {
    try {
      await apiClient.delete(`/news/${id}`);
      return { success: true };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete news');
    }
  }

  async search(query) {
    try {
      const response = await apiClient.get(`/news/search?q=${encodeURIComponent(query)}`);
      return response.data.data.map(newsData => new News(newsData));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search news');
    }
  }
}
