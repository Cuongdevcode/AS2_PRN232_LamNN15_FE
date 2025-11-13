/**
 * Get All Categories Use Case
 */
export class GetAllCategoriesUseCase {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute() {
    try {
      const categories = await this.categoryRepository.getAll();
      return {
        success: true,
        data: categories
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}
