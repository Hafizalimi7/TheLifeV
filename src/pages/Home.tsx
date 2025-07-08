import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '../assets';
export default function Home() {
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="relative bg-secondary min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Empower Your</span>
              <span className="block text-primary">Health Journey</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Welcome to our health-focused platform, where expert knowledge meets practical application. 
              Explore research-driven insights and solutions crafted to elevate your well-being.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-soft"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href='https://calendly.com/thelifevoyage-info/15min'
              target='blank'
                className="inline-flex items-center px-8 py-3 rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
        <div 
  className="absolute inset-0 bg-center bg-cover opacity-40" 
  style={{ backgroundImage: `url(${images.home})` }} 
/>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-secondary rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Care</h3>
              <p className="text-gray-600">Tailored support and guidance for your unique health journey.</p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">Evidence-based approaches backed by years of experience.</p>
            </div>
            <div className="bg-secondary rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Support</h3>
              <p className="text-gray-600">Comprehensive care that addresses all aspects of well-being.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}