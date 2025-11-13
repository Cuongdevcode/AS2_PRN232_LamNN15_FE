import { FaExclamationTriangle, FaInfoCircle, FaTimes } from 'react-icons/fa';

/**
 * Alert Component
 * Displays alerts/notifications with different types
 */
const Alert = ({ type = 'info', message, onClose }) => {
  const types = {
    success: {
      bg: 'bg-green-50 border-green-500',
      text: 'text-green-800',
      icon: '✅'
    },
    error: {
      bg: 'bg-red-50 border-red-500',
      text: 'text-red-800',
      icon: <FaExclamationTriangle />
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-500',
      text: 'text-yellow-800',
      icon: <FaExclamationTriangle />
    },
    info: {
      bg: 'bg-blue-50 border-blue-500',
      text: 'text-blue-800',
      icon: <FaInfoCircle />
    }
  };

  const config = types[type] || types.info;

  return (
    <div className={`${config.bg} border-l-4 p-4 rounded-lg shadow-md flex items-start justify-between animate-slideDown`}>
      <div className="flex items-start space-x-3">
        <div className={`${config.text} text-xl mt-0.5`}>
          {config.icon}
        </div>
        <p className={`${config.text} font-medium`}>
          {message}
        </p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className={`${config.text} hover:opacity-70 transition ml-4`}
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Alert;
