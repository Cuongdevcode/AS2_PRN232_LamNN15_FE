/**
 * Get All News Use Case
 * Business logic for fetching all news with filters
 */
export class GetAllNewsUseCase {
  constructor(newsRepository) {
    this.newsRepository = newsRepository;
  }

  async execute(filters = {}) {
    try {
      const news = await this.newsRepository.getAll(filters);
      return {
        success: true,
        data: news
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}
