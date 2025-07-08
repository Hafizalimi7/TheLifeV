import React, {useEffect} from 'react';

const Policy = () => {
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>

        <section>
    <p className='mt-5'><strong>Effective Date:</strong> 26/12/2024</p>
    <p className='mt-5'>At The Life Voyage, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you engage with our services, website, and other resources. By using our website or services, you agree to the practices described in this policy.</p>
    <h3>1. Information We Collect</h3>
    <p className='mt-5'><strong>a. Personal Information</strong><br />
    When you voluntarily provide it, we may collect personal details such as:<br />
    - Name<br />
    - Email address<br />
    - Phone number<br />
    - Billing or payment information<br />
    - Any other details you share through forms or communication with us</p>
    <p className='mt-5'><strong>b. Non-Personal Information</strong><br />
    We may automatically collect certain information when you interact with our website, including:<br />
    - IP address<br />
    - Browser type and version<br />
    - Pages viewed on our website<br />
    - Date and time of visits<br />
    - Device type</p>
    <h3>2. How We Use Your Information</h3>
    <p className='mt-5'>We use the information we collect to:<br />
    - Provide and improve our services<br />
    - Communicate with you, including responding to inquiries and sending updates<br />
    - Process payments and transactions<br />
    - Customize your experience on our website<br />
    - Ensure compliance with legal and regulatory obligations</p>
    <p className='mt-5'><strong>For full policy, please visit the website or contact us at Info@thelifevoyage.com.</strong></p>
    </section>
      </div>
    </div>
  );
};

export default Policy;
