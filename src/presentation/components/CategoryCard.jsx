import { Link } from 'react-router-dom';

/**
 * CategoryCard Component
 * Displays a category with icon and news count
 */
const CategoryCard = ({ category }) => {
  const iconMap = {
    academic: '📚',
    events: '🎉',
    admission: '🎓',
    research: '🔬',
    sports: '⚽',
    culture: '🎭',
    technology: '💻',
    default: '📰'
  };

  const icon = iconMap[category.slug] || iconMap.default;

  return (
    <Link
      to={`/category/${category.id}`}
      className="block group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-orange-500"
    >
      <div className="p-6 text-center">
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {category.description}
        </p>
        <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
          {category.newsCount || 0} tin tức
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
