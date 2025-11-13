import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import CategoryCard from '../components/CategoryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { FaArrowRight, FaFire, FaClock } from 'react-icons/fa';

/**
 * HomePage Component
 * Main landing page with featured news and categories
 */
const HomePage = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API calls
    // Simulating data for now
    setTimeout(() => {
      setFeaturedNews([
        {
          id: 1,
          title: 'FPT University công bố tuyển sinh năm 2025 với nhiều học bổng hấp dẫn',
          excerpt: 'Đại học FPT chính thức mở đợt tuyển sinh năm 2025 với hơn 5000 chỉ tiêu và 100% học sinh đạt điểm tốt được xét học bổng.',
          imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
          categoryName: 'Tuyển sinh',
          authorName: 'Nguyễn Văn A',
          viewCount: 1234,
          createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
        }
      ]);

      setLatestNews([
        {
          id: 2,
          title: 'Sinh viên FPT đạt giải Nhất cuộc thi Lập trình Quốc tế',
          excerpt: 'Đội tuyển sinh viên của FPT University đã xuất sắc giành giải Nhất tại cuộc thi lập trình...',
          imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400',
          categoryName: 'Học thuật',
          authorName: 'Trần Thị B',
          viewCount: 856,
          createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000)
        },
        {
          id: 3,
          title: 'Sự kiện Tech Day 2025 - Kết nối công nghệ và đổi mới',
          excerpt: 'FPT University tổ chức sự kiện Tech Day quy tụ các chuyên gia hàng đầu trong ngành công nghệ...',
          imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
          categoryName: 'Sự kiện',
          authorName: 'Lê Văn C',
          viewCount: 623,
          createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
        },
        {
          id: 4,
          title: 'Khoa Công nghệ thông tin mở rộng hợp tác với các doanh nghiệp',
          excerpt: 'Nhiều chương trình đào tạo mới được triển khai nhằm đáp ứng nhu cầu thực tế của thị trường...',
          imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
          categoryName: 'Học thuật',
          authorName: 'Phạm Thị D',
          viewCount: 445,
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
        },
        {
          id: 5,
          title: 'FPT Arena - Sân chơi thể thao mới cho sinh viên',
          excerpt: 'Khu liên hợp thể thao FPT Arena chính thức đi vào hoạt động với đầy đủ trang thiết bị hiện đại...',
          imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
          categoryName: 'Thể thao',
          authorName: 'Hoàng Văn E',
          viewCount: 789,
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000)
        },
        {
          id: 6,
          title: 'Nghiên cứu AI của FPT được công bố trên tạp chí quốc tế',
          excerpt: 'Nhóm nghiên cứu AI Lab của FPT University đã công bố kết quả nghiên cứu đột phá...',
          imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
          categoryName: 'Nghiên cứu',
          authorName: 'Đỗ Thị F',
          viewCount: 534,
          createdAt: new Date(Date.now() - 36 * 60 * 60 * 1000)
        }
      ]);

      setCategories([
        { id: 1, name: 'Học thuật', slug: 'academic', description: 'Tin tức về học thuật, nghiên cứu khoa học', newsCount: 45 },
        { id: 2, name: 'Sự kiện', slug: 'events', description: 'Các sự kiện, hội thảo, workshop', newsCount: 32 },
        { id: 3, name: 'Tuyển sinh', slug: 'admission', description: 'Thông tin tuyển sinh, học bổng', newsCount: 28 },
        { id: 4, name: 'Nghiên cứu', slug: 'research', description: 'Kết quả nghiên cứu khoa học', newsCount: 19 },
        { id: 5, name: 'Thể thao', slug: 'sports', description: 'Hoạt động thể thao, giải đấu', newsCount: 15 },
        { id: 6, name: 'Văn hóa', slug: 'culture', description: 'Hoạt động văn hóa, nghệ thuật', newsCount: 22 },
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div>
      {/* Hero Section - Featured News */}
      <section className="bg-linear-to-br from-orange-50 to-orange-100 py-12">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex items-center space-x-3 mb-6">
            <FaFire className="text-orange-600 text-2xl" />
            <h2 className="text-3xl font-bold text-gray-800">Tin nổi bật</h2>
          </div>
          
          {featuredNews.length > 0 && (
            <NewsCard news={featuredNews[0]} featured={true} />
          )}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <FaClock className="text-orange-600 text-2xl" />
              <h2 className="text-3xl font-bold text-gray-800">Tin mới nhất</h2>
            </div>
            <Link
              to="/news"
              className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold group"
            >
              <span>Xem tất cả</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Danh mục tin tức</h2>
            <p className="text-gray-600">Khám phá các chủ đề tin tức khác nhau tại FPT University</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-orange-600 to-orange-500 py-16 text-white">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Đăng ký nhận tin tức mới nhất</h2>
          <p className="text-xl mb-8 text-orange-100">
            Cập nhật tin tức, sự kiện và thông tin quan trọng từ FPT University
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition shadow-lg hover:shadow-xl">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
