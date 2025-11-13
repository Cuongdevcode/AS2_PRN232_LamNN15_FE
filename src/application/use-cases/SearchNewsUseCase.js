/**
 * Search News Use Case
 * Business logic for searching news
 */
export class SearchNewsUseCase {
  constructor(newsRepository) {
    this.newsRepository = newsRepository;
  }

  async execute(query) {
    try {
      if (!query || query.trim().length < 2) {
        throw new Error('Search query must be at least 2 characters');
      }

      const news = await this.newsRepository.search(query);

      return {
        success: true,
        data: news,
        count: news.length
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}
