import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { images } from '../assets';
export default function Contact() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      // Sending form data to the server
      const response = await axios.post("https://backend.thelifevoyage.com/app/send-email/", formData);
  
      if (response.status === 200 || response.status === 201) {
        // Notify success
        toast.success("Contact Form Submitted Successfully!");
        setSubmitting(false);
        // Navigate to the home page
        navigate("/");
      } else {
        // Handle unexpected status codes
        setSubmitting(false);
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      // Log the error for debugging
      console.error("Error submitting the form:", error);
  
      // Handle Axios errors
      if (axios.isAxiosError(error) && error.response) {
        toast.error(`Error: ${error.response.data?.message || "Failed to send the message."}`);
      } else {
        // General error fallback
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Get In Touch</h1>
            <p className="mt-4 text-lg text-gray-600">
              Our team is here to assist with any questions you may have. Simply complete the form below, and we'll get back to you as soon as possible.
            </p>
            
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-soft">
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-primary" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Our opening hours are:</h3>
                  <p className="mt-1 text-gray-600">Monday to Friday | 9am to 5pm (UK time)</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-soft">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-lg border-gray-300 shadow focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-lg border-gray-300 shadow focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number *</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-lg border-gray-300 shadow focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="source" className="block text-sm font-medium text-gray-700">Where did you hear about us?</label>
                <select
                  name="source"
                  id="source"
                  className="px-2 py-2 mt-1 block w-full rounded-lg border-gray-300 shadow focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={formData.source}
                  onChange={handleChange}
                >
                  <option value="">Please select</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Enquiry *</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="px-2 py-2 mt-1 block w-full rounded-lg border-gray-300 shadow focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all transform hover:scale-105 shadow-soft"
              >
                {submitting ?
                  <span className="flex justify-center gap-3 items-center">
                  <img src={images.blackLoadingIcon} alt="" className="h-6" />Submitting...
                  </span>
                  :
                  "Submit"
              }
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}