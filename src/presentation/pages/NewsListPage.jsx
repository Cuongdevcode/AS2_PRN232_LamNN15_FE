import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
import { FaFilter, FaSearch } from 'react-icons/fa';

/**
 * NewsListPage Component
 * Lists all news with filters and pagination
 */
const NewsListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Replace with actual API call
    setTimeout(() => {
      setCategories([
        { id: 'all', name: 'Tất cả' },
        { id: '1', name: 'Học thuật' },
        { id: '2', name: 'Sự kiện' },
        { id: '3', name: 'Tuyển sinh' },
        { id: '4', name: 'Nghiên cứu' },
        { id: '5', name: 'Thể thao' },
      ]);

      setNews([
        {
          id: 1,
          title: 'FPT University công bố tuyển sinh năm 2025 với nhiều học bổng hấp dẫn',
          excerpt: 'Đại học FPT chính thức mở đợt tuyển sinh năm 2025 với hơn 5000 chỉ tiêu...',
          imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
          categoryName: 'Tuyển sinh',
          authorName: 'Nguyễn Văn A',
          viewCount: 1234,
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
          id: 2,
          title: 'Sinh viên FPT đạt giải Nhất cuộc thi Lập trình Quốc tế',
          excerpt: 'Đội tuyển sinh viên của FPT University đã xuất sắc giành giải Nhất...',
          imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
          categoryName: 'Học thuật',
          authorName: 'Trần Thị B',
          viewCount: 856,
          createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
        },
        {
          id: 3,
          title: 'Sự kiện Tech Day 2025 - Kết nối công nghệ và đổi mới',
          excerpt: 'FPT University tổ chức sự kiện Tech Day quy tụ các chuyên gia hàng đầu...',
          imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
          categoryName: 'Sự kiện',
          authorName: 'Lê Văn C',
          viewCount: 623,
          createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
        },
        {
          id: 4,
          title: 'Khoa Công nghệ thông tin mở rộng hợp tác với các doanh nghiệp',
          excerpt: 'Nhiều chương trình đào tạo mới được triển khai nhằm đáp ứng nhu cầu thực tế...',
          imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
          categoryName: 'Học thuật',
          authorName: 'Phạm Thị D',
          viewCount: 445,
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
        },
        {
          id: 5,
          title: 'FPT Arena - Sân chơi thể thao mới cho sinh viên',
          excerpt: 'Khu liên hợp thể thao FPT Arena chính thức đi vào hoạt động...',
          imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
          categoryName: 'Thể thao',
          authorName: 'Hoàng Văn E',
          viewCount: 789,
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
        },
        {
          id: 6,
          title: 'Nghiên cứu AI của FPT được công bố trên tạp chí quốc tế',
          excerpt: 'Nhóm nghiên cứu AI Lab của FPT University đã công bố kết quả nghiên cứu...',
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
          categoryName: 'Nghiên cứu',
          authorName: 'Đỗ Thị F',
          viewCount: 534,
          createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000)
        }
      ]);

      setLoading(false);
    }, 1000);
  }, [currentPage, selectedCategory, searchQuery]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    if (categoryId !== 'all') {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    // TODO: Implement search functionality
  };

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Tin tức FPT University</h1>
          <p className="text-gray-600">Cập nhật tin tức mới nhất về hoạt động, sự kiện và thành tựu của trường</p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Category filter */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <FaFilter className="text-orange-600" />
                <label className="font-semibold text-gray-700">Danh mục</label>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedCategory === category.id
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="lg:w-96">
              <div className="flex items-center space-x-2 mb-3">
                <FaSearch className="text-orange-600" />
                <label className="font-semibold text-gray-700">Tìm kiếm</label>
              </div>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm tin tức..."
                  className="w-full px-4 py-2 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* News Grid */}
        {news.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {news.map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Không tìm thấy tin tức nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsListPage;
