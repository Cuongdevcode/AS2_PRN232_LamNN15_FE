import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './presentation/layouts/MainLayout';
import HomePage from './presentation/pages/HomePage';
import NewsListPage from './presentation/pages/NewsListPage';
import NewsDetailPage from './presentation/pages/NewsDetailPage';
import CategoriesPage from './presentation/pages/CategoriesPage';
import './App.css';

/**
 * Main App Component
 * Sets up routing and layout structure
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsListPage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="category/:id" element={<NewsListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
