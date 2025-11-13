import apiClient from '../api/apiClient';
import { Category } from '../../domain/entities/Category';
import { ICategoryRepository } from '../../domain/repositories/ICategoryRepository';

/**
 * Category Repository Implementation
 * Handles all category-related API calls
 */
export class CategoryRepository extends ICategoryRepository {
  async getAll() {
    try {
      const response = await apiClient.get('/categories');
      return response.data.data.map(categoryData => new Category(categoryData));
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch categories');
    }
  }

  async getById(id) {
    try {
      const response = await apiClient.get(`/categories/${id}`);
      return new Category(response.data.data);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch category');
    }
  }

  async create(categoryData) {
    try {
      const response = await apiClient.post('/categories', categoryData);
      return new Category(response.data.data);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create category');
    }
  }

  async update(id, categoryData) {
    try {
      const response = await apiClient.put(`/categories/${id}`, categoryData);
      return new Category(response.data.data);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update category');
    }
  }

  async delete(id) {
    try {
      await apiClient.delete(`/categories/${id}`);
      return { success: true };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete category');
    }
  }
}
