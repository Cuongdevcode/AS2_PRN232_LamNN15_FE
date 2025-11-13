import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaUser, FaEye, FaTag, FaArrowLeft, FaShare } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import LoadingSpinner from '../components/LoadingSpinner';
import NewsCard from '../components/NewsCard';

/**
 * NewsDetailPage Component
 * Shows full news article with related news
 */
const NewsDetailPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    setTimeout(() => {
      setNews({
        id: 1,
        title: 'FPT University công bố tuyển sinh năm 2025 với nhiều học bổng hấp dẫn',
        content: `
          <p>Đại học FPT chính thức công bố kế hoạch tuyển sinh năm 2025 với nhiều chính sách học bổng hấp dẫn dành cho học sinh xuất sắc trên toàn quốc.</p>
          
          <h3>Chỉ tiêu tuyển sinh</h3>
          <p>Năm 2025, FPT University dự kiến tuyển sinh hơn 5000 sinh viên cho các chương trình đào tạo từ cử nhân đến thạc sĩ. Đặc biệt, trường sẽ mở rộng các ngành học mới liên quan đến trí tuệ nhân tạo, khoa học dữ liệu và blockchain.</p>
          
          <h3>Học bổng toàn phần</h3>
          <p>100% học sinh đạt điểm thi tốt nghiệp THPT từ 27 điểm trở lên sẽ được xét học bổng. Riêng các thủ khoa, á khoa tốt nghiệp THPT sẽ nhận học bổng toàn phần 4 năm học cùng nhiều quyền lợi đặc biệt khác.</p>
          
          <h3>Hình thức xét tuyển</h3>
          <p>FPT University áp dụng đa dạng hình thức xét tuyển bao gồm:</p>
          <ul>
            <li>Xét tuyển dựa trên kết quả thi tốt nghiệp THPT 2025</li>
            <li>Xét tuyển học bạ THPT 3 năm</li>
            <li>Xét tuyển dựa trên các chứng chỉ quốc tế (IELTS, SAT, etc.)</li>
            <li>Xét tuyển thẳng cho học sinh có thành tích xuất sắc</li>
          </ul>
          
          <h3>Thời gian đăng ký</h3>
          <p>Thời gian nhận hồ sơ xét tuyển từ ngày 01/01/2025 đến hết ngày 31/08/2025. Ứng viên có thể nộp hồ sơ trực tuyến qua website tuyển sinh của trường hoặc trực tiếp tại các văn phòng tuyển sinh.</p>
        `,
        excerpt: 'Đại học FPT chính thức mở đợt tuyển sinh năm 2025 với hơn 5000 chỉ tiêu và 100% học sinh đạt điểm tốt được xét học bổng.',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200',
        categoryId: 1,
        categoryName: 'Tuyển sinh',
        authorName: 'Nguyễn Văn A',
        viewCount: 1234,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        tags: ['tuyển sinh', 'học bổng', 'FPT 2025']
      });

      setRelatedNews([
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
          excerpt: 'FPT University tổ chức sự kiện Tech Day quy tụ các chuyên gia...',
          imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
          categoryName: 'Sự kiện',
          authorName: 'Lê Văn C',
          viewCount: 623,
          createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000)
        },
        {
          id: 4,
          title: 'Khoa Công nghệ thông tin mở rộng hợp tác với các doanh nghiệp',
          excerpt: 'Nhiều chương trình đào tạo mới được triển khai...',
          imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
          categoryName: 'Học thuật',
          authorName: 'Phạm Thị D',
          viewCount: 445,
          createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
        }
      ]);

      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy tin tức</h2>
        <Link to="/" className="text-orange-600 hover:text-orange-700">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  const formattedDate = formatDistanceToNow(new Date(news.createdAt), { addSuffix: true, locale: vi });

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Trang chủ</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-orange-600">Tin tức</Link>
            <span>/</span>
            <span className="text-gray-800">{news.categoryName}</span>
          </div>
        </div>
      </div>

      <article className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link
            to="/news"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại</span>
          </Link>

          {/* Category badge */}
          <div className="mb-4">
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {news.categoryName}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {news.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b-2 border-gray-200">
            <div className="flex items-center space-x-2 text-gray-600">
              <FaUser className="text-orange-600" />
              <span className="font-medium">{news.authorName}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaClock className="text-orange-600" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <FaEye className="text-orange-600" />
              <span>{news.viewCount} lượt xem</span>
            </div>
            <button className="ml-auto flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold">
              <FaShare />
              <span>Chia sẻ</span>
            </button>
          </div>

          {/* Featured image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: news.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '1.125rem'
            }}
          />

          {/* Tags */}
          {news.tags && news.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b-2 border-gray-200">
              <FaTag className="text-orange-600" />
              {news.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 cursor-pointer transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Tin liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((relatedItem) => (
                <NewsCard key={relatedItem.id} news={relatedItem} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default NewsDetailPage;
