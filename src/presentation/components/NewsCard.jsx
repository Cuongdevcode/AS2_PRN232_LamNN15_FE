import { Link } from 'react-router-dom';
import { FaClock, FaUser, FaEye } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';

/**
 * NewsCard Component
 * Displays a single news article card
 */
const NewsCard = ({ news, featured = false }) => {
  const formattedDate = news.createdAt 
    ? formatDistanceToNow(new Date(news.createdAt), { addSuffix: true, locale: vi })
    : '';

  if (featured) {
    return (
      <Link
        to={`/news/${news.id}`}
        className="block group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={news.imageUrl || 'https://via.placeholder.com/800x600?text=FPT+News'}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {news.categoryName || 'Tin tức'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
            {news.title}
          </h2>
          <p className="text-gray-200 mb-4 line-clamp-2">
            {news.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <span className="flex items-center">
              <FaUser className="mr-2" />
              {news.authorName || 'Admin'}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-2" />
              {formattedDate}
            </span>
            <span className="flex items-center">
              <FaEye className="mr-2" />
              {news.viewCount || 0}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/news/${news.id}`}
      className="block group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={news.imageUrl || 'https://via.placeholder.com/400x300?text=FPT+News'}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            {news.categoryName || 'Tin tức'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center">
            <FaUser className="mr-1" />
            {news.authorName || 'Admin'}
          </span>
          <span className="flex items-center">
            <FaClock className="mr-1" />
            {formattedDate}
          </span>
          <span className="flex items-center">
            <FaEye className="mr-1" />
            {news.viewCount || 0}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
