import React, {useEffect} from 'react';

const Disclaimer = () => {
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Disclaimer</h1>

        <section>
    <p>At The Life Voyage, we are dedicated to supporting individuals on their holistic journey to well-being. However, the services, guidance, and information we provide are not intended to diagnose, treat, cure, or prevent any medical condition, including cancer. Our offerings are designed to complement—not replace—the advice and treatment provided by licensed medical professionals.</p>
    <p className='mt-5'><strong>Important Note:</strong> Always follow the recommendations of your doctor or qualified healthcare professionals regarding your health and treatment. If you have a medical emergency, please seek immediate assistance.</p>
    <p className='mt-5'>All content shared by The Life Voyage is protected by copyright and may not be reproduced without proper credit. Use is limited to personal, non-commercial purposes only.</p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
