/**
 * Validation utilities
 */

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isNotEmpty = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
};

export const validateNewsForm = (formData) => {
  const errors = {};
  
  if (!isNotEmpty(formData.title)) {
    errors.title = 'Tiêu đề là bắt buộc';
  }
  
  if (!isNotEmpty(formData.content)) {
    errors.content = 'Nội dung là bắt buộc';
  }
  
  if (!formData.categoryId) {
    errors.categoryId = 'Vui lòng chọn danh mục';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
