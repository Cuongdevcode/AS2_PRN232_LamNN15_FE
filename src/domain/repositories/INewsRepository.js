/**
 * News Repository Interface
 * Defines contract for news data operations
 */
export class INewsRepository {
  async getAll(filters = {}) {
    throw new Error('Method not implemented');
  }

  async getById(id) {
    throw new Error('Method not implemented');
  }

  async getByCategory(categoryId, limit) {
    throw new Error('Method not implemented');
  }

  async getFeatured(limit) {
    throw new Error('Method not implemented');
  }

  async getLatest(limit) {
    throw new Error('Method not implemented');
  }

  async create(newsData) {
    throw new Error('Method not implemented');
  }

  async update(id, newsData) {
    throw new Error('Method not implemented');
  }

  async delete(id) {
    throw new Error('Method not implemented');
  }

  async search(query) {
    throw new Error('Method not implemented');
  }
}
