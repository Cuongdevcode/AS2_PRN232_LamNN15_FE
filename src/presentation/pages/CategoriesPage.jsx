import { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * CategoriesPage Component
 * Shows all available news categories
 */
const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    setTimeout(() => {
      setCategories([
        { 
          id: 1, 
          name: 'Học thuật', 
          slug: 'academic', 
          description: 'Tin tức về học thuật, chương trình đào tạo, nghiên cứu khoa học và thành tích học tập',
          newsCount: 45 
        },
        { 
          id: 2, 
          name: 'Sự kiện', 
          slug: 'events', 
          description: 'Các sự kiện, hội thảo, workshop, career day và hoạt động cộng đồng',
          newsCount: 32 
        },
        { 
          id: 3, 
          name: 'Tuyển sinh', 
          slug: 'admission', 
          description: 'Thông tin tuyển sinh, học bổng, xét tuyển và các chính sách hỗ trợ sinh viên',
          newsCount: 28 
        },
        { 
          id: 4, 
          name: 'Nghiên cứu', 
          slug: 'research', 
          description: 'Kết quả nghiên cứu khoa học, dự án nghiên cứu và hợp tác quốc tế',
          newsCount: 19 
        },
        { 
          id: 5, 
          name: 'Thể thao', 
          slug: 'sports', 
          description: 'Hoạt động thể thao, giải đấu, CLB thể thao và sức khỏe sinh viên',
          newsCount: 15 
        },
        { 
          id: 6, 
          name: 'Văn hóa', 
          slug: 'culture', 
          description: 'Hoạt động văn hóa, nghệ thuật, CLB và phong trào sinh viên',
          newsCount: 22 
        },
        { 
          id: 7, 
          name: 'Công nghệ', 
          slug: 'technology', 
          description: 'Tin tức về công nghệ, đổi mới sáng tạo, startup và chuyển đổi số',
          newsCount: 38 
        },
        { 
          id: 8, 
          name: 'Doanh nghiệp', 
          slug: 'business', 
          description: 'Hợp tác doanh nghiệp, cơ hội việc làm và thực tập sinh',
          newsCount: 26 
        },
        { 
          id: 9, 
          name: 'Quốc tế', 
          slug: 'international', 
          description: 'Hợp tác quốc tế, du học, trao đổi sinh viên và chương trình liên kết',
          newsCount: 17 
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <LoadingSpinner fullScreen />;
  }

  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Danh mục tin tức</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Khám phá các chủ đề tin tức đa dạng về hoạt động học thuật, sự kiện, 
            nghiên cứu và cuộc sống sinh viên tại FPT University
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-linear-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{categories.length}</div>
              <div className="text-orange-100">Danh mục</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                {categories.reduce((sum, cat) => sum + cat.newsCount, 0)}
              </div>
              <div className="text-orange-100">Tin tức</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-orange-100">Lượt xem</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
