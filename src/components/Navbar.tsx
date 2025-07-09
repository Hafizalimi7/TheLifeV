import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { images } from '../assets';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto md:px-4 px-2 lg:px-8">
        <div className="flex justify-between h-16">
          
          <div className="flex items-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex gap-3 items-center">
              <img 
                src={images.logo} 
                alt="The Life Voyage Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-semibold text-primary">The Life Voyage</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition">Services</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition">Contact</Link>
            <a 
              href='https://calendly.com/thelifevoyage-info/15min'
              target='blank'
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-[#1a3057] transition transform hover:scale-105"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg absolute w-full">
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-base font-medium bg-primary text-white hover:bg-[#1a3057] rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}