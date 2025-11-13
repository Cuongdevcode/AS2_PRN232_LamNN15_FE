/**
 * Get News By ID Use Case
 * Business logic for fetching a single news article
 */
export class GetNewsByIdUseCase {
  constructor(newsRepository) {
    this.newsRepository = newsRepository;
  }

  async execute(id) {
    try {
      if (!id) {
        throw new Error('News ID is required');
      }

      const news = await this.newsRepository.getById(id);
      
      if (!news) {
        throw new Error('News not found');
      }

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
