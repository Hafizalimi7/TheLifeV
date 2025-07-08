import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { images } from '../assets';
import FootModal from './FootModal';

export default function Footer() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modaltitle, setModaltitle] = useState("");
  
  // Open the modal with different content
  const handleOpenModal = (content:any, title:any) => {
    setModalContent(content);
    setModaltitle(title);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const privacyPolicy = `
    
  `;
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row  justify-between items-center space-y-6 md:space-y-0">
          <div className="flex gap-2 items-center justify-start">
            <img 
              src={images.logo} 
              alt="The Life Voyage Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-primary">The Life Voyage</span>
          </div>
          
          <div className="md:flex md:space-x-6 space-y-2 grid text-center items-baseline">
            <Link to="/" className="text-gray-500 hover:text-primary m-0 p-0">Home</Link>
            <Link to="/about" className="text-gray-500 hover:text-primary m-0 p-0">About</Link>
            <Link to="/services" className="text-gray-500 hover:text-primary m-0 p-0">Services</Link>
            <Link to="/contact" className="text-gray-500 hover:text-primary m-0 p-0">Contact</Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary m-0 p-0">Terms and Conditions</Link>
            <Link to="/policy"
            className="text-gray-500 hover:text-primary m-0 p-0">Privacy Policy</Link>
            <Link to="/disclaimer" 
            className="text-gray-500 hover:text-primary m-0 p-0">Disclaimer</Link>
          </div>
          <FootModal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} title={modaltitle} />

          {/* <div className="footer-secondary-links">
        <button className="button-link" onClick={() => openModal('privacy')}>Privacy Policy</button>
        <button className="button-link" onClick={() => openModal('disclaimer')}>Disclaimer</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-content" dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )} */}

          <div className="flex space-x-6 items-start">
            <a href="https://www.instagram.com/the.life.voyage" className="text-gray-400 hover:text-primary transition transform hover:scale-110">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://web.facebook.com/people/The-life-voyage/61570073396968/" className="text-gray-400 hover:text-primary transition transform hover:scale-110">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.tiktok.com/@the.life.voyage?_t=ZN-8xpqUoXbfHi&_r=1" className="text-gray-400 hover:text-primary transition transform hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 24 24">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
            </a>
            {/* <a href="https://x.com" className="text-gray-400 hover:text-primary transition transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </a> */}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} The Life Voyage, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}