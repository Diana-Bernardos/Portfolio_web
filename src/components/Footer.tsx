import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Diana Bernardos. Hecho con <span className="text-red-500">❤</span> y React.
        </p>
      </div>
    </footer>
  );
}
