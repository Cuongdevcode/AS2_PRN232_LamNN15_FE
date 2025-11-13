/**
 * Create News Use Case
 * Business logic for creating a news article
 */
export class CreateNewsUseCase {
  constructor(newsRepository) {
    this.newsRepository = newsRepository;
  }

  async execute(newsData) {
    try {
      // Validation
      if (!newsData.title || newsData.title.trim().length === 0) {
        throw new Error('Title is required');
      }

      if (!newsData.content || newsData.content.trim().length === 0) {
        throw new Error('Content is required');
      }

      if (!newsData.categoryId) {
        throw new Error('Category is required');
      }

      // Create news
      const news = await this.newsRepository.create(newsData);

      return {
        success: true,
        data: news,
        message: 'News created successfully'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}
