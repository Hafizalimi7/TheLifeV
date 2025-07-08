import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// CertModal component that receives dynamic title, content, price, and onClose function
const CertModal = ({ isOpen, onClose, title, img }: any) => {
  // Close CertModal when clicking outside
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
      <div className="bg-white rounded-lg w-96 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-1xl text-gray-900 font-semibold mb-4">{title}</h2>
        <div >
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CertModal;
