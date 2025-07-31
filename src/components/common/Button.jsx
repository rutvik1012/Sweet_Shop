import React from 'react'


        const Button = ({ onClick, children, className = '', variant = 'primary' }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-transform transform hover:scale-105';
  const variants = {
    primary: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
  };
  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
    

export default Button