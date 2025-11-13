import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaNewspaper, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

/**
 * Footer Component
 * FPT themed footer with links and contact info
 */
const Footer = () => {
  const quickLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Tin tức', path: '/news' },
    { name: 'Danh mục', path: '/categories' },
    { name: 'Giới thiệu', path: '/about' },
  ];

  const categories = [
    { name: 'Học thuật', path: '/category/academic' },
    { name: 'Sự kiện', path: '/category/events' },
    { name: 'Tuyển sinh', path: '/category/admission' },
    { name: 'Nghiên cứu', path: '/category/research' },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl">
                <FaNewspaper className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">FPT News</h3>
                <p className="text-xs text-orange-400">University Portal</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Cổng thông tin tin tức chính thức của Đại học FPT, cập nhật tin tức mới nhất về học thuật, sự kiện và hoạt động sinh viên.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-orange-600 p-2 rounded-lg transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-600 pb-2 inline-block">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center group"
                  >
                    <span className="mr-2 text-orange-600">▸</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-600 pb-2 inline-block">
              Danh mục
            </h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="mr-2 text-orange-600">▸</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-b-2 border-orange-600 pb-2 inline-block">
              Liên hệ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Khu Công nghệ cao Hòa Lạc, Km29 Đại lộ Thăng Long, Hà Nội
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">024 7300 1866</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">contact@fpt.edu.vn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-screen-xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 FPT University News. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-orange-500 transition">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="hover:text-orange-500 transition">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
