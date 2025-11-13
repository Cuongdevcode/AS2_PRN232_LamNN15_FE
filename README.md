# FPT University News Management System - Frontend

React-based news management system built with Clean Architecture principles and FPT University's orange branding.

## 🏗️ Architecture

This project follows **Clean Architecture** principles:

### Layer Structure

```
src/
├── domain/              # Business entities and rules
│   ├── entities/        # Domain models (News, Category, User)
│   └── repositories/    # Repository interfaces
├── application/         # Use cases / Business logic
│   └── use-cases/       # Application-specific business rules
├── infrastructure/      # External interfaces
│   ├── api/            # API client configuration
│   ├── services/       # Repository implementations
│   └── storage/        # Local storage services
├── presentation/        # UI Layer
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Layout wrappers
│   ├── pages/          # Page components
│   └── styles/         # Styling
└── utils/              # Helper functions
```

## 🚀 Features

- ✅ Clean Architecture implementation
- ✅ React Router for navigation
- ✅ Tailwind CSS v4 for styling
- ✅ Axios for API calls
- ✅ React Icons
- ✅ Date formatting with date-fns
- ✅ FPT University orange theme (#ea580c)
- ✅ Responsive design
- ✅ Component-based architecture

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎨 Design System

### Colors
- Primary: Orange (#ea580c, #f97316)
- Secondary: Gray (#1f2937, #6b7280)
- Background: White, Light Gray

### Components
- Header with navigation
- Footer with links and contact info
- News cards (regular & featured)
- Category cards
- Loading spinner
- Pagination
- Alert notifications

## 🔧 Configuration

Create a `.env` file based on `.env.example`:

```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

## 📱 Pages

- **Home**: Featured news, latest news, categories overview
- **News List**: All news with filters and pagination
- **News Detail**: Full article view with related news
- **Categories**: Browse news by category

## 🛠️ Tech Stack

- React 19
- Vite 7 (Rolldown)
- React Router DOM
- Tailwind CSS v4
- Axios
- date-fns
- React Icons

## 📝 Usage Examples

### Creating a new page

```jsx
import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const MyPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Implement your logic
  
  return (
    <div>
      {/* Your content */}
    </div>
  );
};

export default MyPage;
```

### Using repository

```javascript
import { NewsRepository } from '../infrastructure/services/NewsRepository';

const newsRepo = new NewsRepository();
const news = await newsRepo.getAll({ category: 'academic' });
```

## 🎯 Next Steps

1. Connect to real backend API
2. Implement authentication
3. Add admin panel for news management
4. Implement real-time search
5. Add comment system
6. Implement likes/reactions

## 👨‍💻 Development

Built with ❤️ for FPT University

---

© 2025 FPT University News System
