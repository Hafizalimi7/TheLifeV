import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Modal component that receives dynamic title, content, price, and onClose function
const Modal = ({ isOpen, onClose, title, content, price, fullPaymentLink, firstPaymentLink }: any) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<'full' | 'first' | 'second' | 'third'>('full');

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
      <div className="bg-white rounded-lg md:w-[600px] w-[90%] max-w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-2xl text-gray-900 font-semibold mb-4">{title}</h2>

        {/* Scrollable content area */}
        <div className="overflow-y-auto max-h-60">
          <p className="text-gray-700 mb-4">{content}</p>
          <div className="text-lg text-gray-800 font-semibold mb-4">{`Total Price: ${price}`}</div>
        </div>



        {title === "Comprehensive Cancer Care" && (
          <div className="space-y-4 mt-6">
            {/* Full Payment Option */}
            <button
              onClick={() => window.open(fullPaymentLink, "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'full' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('full')}
            >
              Pay Full (£800)
            </button>

            {/* First Payment Option */}
            <button
              onClick={() => window.open(firstPaymentLink, "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'first' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('first')}
            >
              Pay First Instalment (£450)
            </button>

            {/* Second Payment Option */}
        
          </div>
        )}

        {title === "Returning Customers Package" && (
          <div className="space-y-4 mt-6">
            {/* Full Payment Option */}
            <button
              onClick={() => window.open(fullPaymentLink, "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'full' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('full')}
            >
              Pay Full (£650)
            </button>

            {/* First Payment Option */}
            <button
              onClick={() => window.open(firstPaymentLink, "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'first' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('first')}
            >
              Pay First Instalment (£400)
            </button>

            
          </div>
        )}

        {title === "Holistic Cancer Prevention Program" && (
          <div className='md:flex gap-3'>
            <div className="space-y-4 mt-3">
            {/* Full Payment Option */}
            <p className='text-center font-semibold p-0 m-0'> (1-on-1)</p>
            <button
              onClick={() => window.open("https://buy.stripe.com/dR6aFDf4balbecMcMS", "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'full' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('full')}
            >
              Pay Full (£700)
            </button>

            {/* First Payment Option */}
            <button
              onClick={() => window.open("https://buy.stripe.com/5kA6pnf4b8d31q0eV1", "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'first' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('first')}
            >
              Pay First Instalment (£400)
            </button>

            {/* Second Payment Option */}
           
          </div>
          <div className="space-y-4 mt-3">
          <p className='text-center font-semibold p-0 m-0'>(Group)</p>

            <button
              onClick={() => window.open("https://buy.stripe.com/4gw5ljaNVdxnfgQ002", "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'second' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('second')}
            >
              Pay Full (£480)
            </button>

            {/* First Payment Option */}
            <button
              onClick={() => window.open("https://buy.stripe.com/eVacNL2hpgJzd8I6ox", "_blank")}
              className={`w-full py-2 px-4 rounded-lg ${selectedPaymentOption === 'third' ? 'bg-[#2B4C7E] text-white' : 'bg-gray-200 text-gray-700'} hover:bg-[#1f3960] transition duration-200`}
              onMouseEnter={() => setSelectedPaymentOption('third')}
            >
              Pay First Instalment (£300)
            </button>

            {/* Second Payment Option */}
            
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Modal;
