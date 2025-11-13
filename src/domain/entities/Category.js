/**
 * Category Entity - Domain Model
 * Represents a news category
 */
export class Category {
  constructor({
    id,
    name,
    description,
    slug,
    icon,
    newsCount = 0,
    createdAt
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.slug = slug;
    this.icon = icon;
    this.newsCount = newsCount;
    this.createdAt = createdAt;
  }
}
