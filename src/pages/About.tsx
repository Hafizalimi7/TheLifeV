import React, {useState, useEffect} from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { images } from '../assets';
import CertModal from '../components/CertModal';
export default function About() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalimg, setModalimg] = useState("");
  const [modaltitle, setModaltitle] = useState("");
  const handleOpenModal = (title:any, img:any) => {
    setModaltitle(title);
    setModalimg(img);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-black sm:text-4xl">About Me</h1>
          <p className="mt-4 text-md text-black">
            A holistic approach to cancer care shaped by personal experience, professional training, and a passion for empowering patients.
          </p>
          <div 
  className="absolute inset-0 bg-center bg-cover opacity-40 h-[330px] md:h-[280px] " 
  style={{ backgroundImage: `url(${images.sb})` }} 
/>
        </div>

        <div className="mt-32 md:mt-[110px]">
          <h2 className="text-2xl font-bold text-gray-900 text-center">My Journey</h2>
          <p className="mt-4 text-md text-gray-500">
          Welcome to The Life Voyage, my holistic cancer support business dedicated to empowering individuals on their journey toward healing and well-being. My mission is to provide comprehensive, natural, and evidence-based solutions that complement traditional cancer treatments while promoting overall health. Through personalized nutrition, mindfulness practices, gentle movement, and emotional support, I offer a holistic approach to cancer care that nourishes the body, mind, and spirit.
          </p>
          <p className="mt-4 text-md text-gray-500">
          I understand that every cancer journey is unique, and I am here to guide, inspire, and support you with a compassionate approach tailored to your specific needs. Whether you’re looking to strengthen your immune system, improve your quality of life, or find peace and balance during treatment, I will walk with you every step of the way.
          </p>
          <p className='mt-4 text-md text-gray-500'>
          For years, I studied cancer and radiotherapy at university, earning my master’s degree. During my studies, I realized the focus was often on managing cancer rather than curing it. This felt incomplete to me and sparked a desire to explore a more comprehensive approach to healing.
          </p>
         
          <p className='mt-4 text-md text-gray-500'>
          That realization inspired me to pursue a holistic path. Over the years, I’ve unlearned much of what I once knew and deeply immersed myself in holistic practices, all while balancing them with my medical background. This journey has been transformative, leading me to where I am today—combining the best of both worlds to truly help others in their healing journeys.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">BSc in Radiotherapy and Oncology</h3>
            <p className="mt-2 text-gray-500">
              Graduated from St. George's University of London in 2023, with placements at the Royal Marsden Hospital in London.
            </p>
            <button
              onClick={() => handleOpenModal("BSc in Radiotherapy and Oncology", images.bsc)}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View Cert
              </button>
              <CertModal isOpen={isModalOpen} onClose={handleCloseModal} img={modalimg} title={modaltitle} />

          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">MSc in Cancer and Clinical Oncology</h3>
            <p className="mt-2 text-gray-500">
              Completed at Queen Mary University of London in 2024, focusing on cancer biology and treatment modalities.
            </p>
            <button
              onClick={() => handleOpenModal("MSc in Cancer and Clinical Oncology", images.msc)}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View Cert
              </button>
              <CertModal isOpen={isModalOpen} onClose={handleCloseModal} img={modalimg} title={modaltitle} />

          </div>

          {/* <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">Certified Practitioner</h3>
            <p className="mt-2 text-gray-500">
              Licensed healthcare provider specializing in holistic cancer care and support.
            </p>
            <button
              onClick={() => handleOpenModal("Certified Practitioner", "")}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View Cert
              </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}