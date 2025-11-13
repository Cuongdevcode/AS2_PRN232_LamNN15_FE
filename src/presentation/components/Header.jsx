import { Link } from 'react-router-dom';
import { FaNewspaper, FaBars, FaSearch, FaUser, FaBell } from 'react-icons/fa';
import { useState } from 'react';

/**
 * Header Component
 * Main navigation bar with FPT orange theme
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Tin tức', path: '/news' },
    { name: 'Danh mục', path: '/categories' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Liên hệ', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-2">
        <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>📧 contact@fpt.edu.vn</span>
            <span>📞 024 7300 1866</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-orange-200 transition">
              <FaBell />
            </button>
            <button className="hover:text-orange-200 transition">
              <FaUser />
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-screen-xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all">
              <FaNewspaper className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition">
                FPT News
              </h1>
              <p className="text-xs text-gray-500">University News Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-700 hover:text-orange-600 transition p-2 hover:bg-orange-50 rounded-lg"
            >
              <FaSearch className="text-xl" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-orange-600 transition p-2"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="mt-4 animate-fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm tin tức..."
                className="w-full px-4 py-3 pl-12 border-2 border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t animate-slideDown">
          <nav className="max-w-screen-xl mx-auto px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
