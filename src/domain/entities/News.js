/**
 * News Entity - Domain Model
 * Represents a news article in the system
 */
export class News {
  constructor({
    id,
    title,
    content,
    excerpt,
    categoryId,
    categoryName,
    authorId,
    authorName,
    imageUrl,
    status, // draft, published, archived
    viewCount = 0,
    createdAt,
    updatedAt,
    publishedAt,
    tags = []
  }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.excerpt = excerpt;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.authorId = authorId;
    this.authorName = authorName;
    this.imageUrl = imageUrl;
    this.status = status;
    this.viewCount = viewCount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.publishedAt = publishedAt;
    this.tags = tags;
  }

  isPublished() {
    return this.status === 'published';
  }

  isDraft() {
    return this.status === 'draft';
  }

  getFormattedDate() {
    return new Date(this.createdAt).toLocaleDateString('vi-VN');
  }
}
