import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Modal component that receives dynamic title, content, price, and onClose function
const FootModal = ({ isOpen, onClose, title, content }: any) => {

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // Prevent closing when pressing ESC key
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-[800px] max-w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">{title}</h2>

        {/* Scrollable content area */}
        <div className="overflow-y-auto max-h-80" dangerouslySetInnerHTML={{ __html: content }}>
          {/* <p className="text-gray-700 mb-4" >{content}</p> */}

          
        </div>

      </div>
    </div>
  );
};

export default FootModal;
