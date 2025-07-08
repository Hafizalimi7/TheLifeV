import React, {useEffect} from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h1>

        <p className="text-md pb-3 text-gray-700">
          Welcome to The Life Voyage. We are dedicated to supporting your holistic health journey and are delighted to provide services designed to help you achieve balance, wellness, and harmony. The Life Voyage is a trading name for THE LIFE VOYAGE, a company registered in United Kingdom under company number 16097316, whose registered address is Flat 15 Regents Court, Pownall Road, London, England, E8 4QD, hereinafter referred to as ‘The Life Voyage’ or ‘we.’ These Terms & Conditions (the ‘Terms’) govern the relationship between The Life Voyage and ‘you,’ the user of our services. Please read these terms carefully as they constitute a legally binding contract.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">SERVICES</h2>
          <p className="text-md pb-3 text-gray-700">
            The Life Voyage offers holistic services tailored to your needs. It is your responsibility to ensure that the information or specifications you provide are accurate.
          </p>
          <p className="text-md pb-3 text-gray-700">
            All services listed on our website or promotional materials are subject to availability.
          </p>
          <p className="text-md pb-3 text-gray-700">
            We will keep you informed about important developments related to the services you have purchased and respond promptly to your inquiries.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Our services are for wellness and educational purposes and are not a substitute for professional medical advice or treatment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">CUSTOMER RESPONSIBILITIES</h2>
          <p className="text-md pb-3 text-gray-700">
            You must provide accurate and up-to-date information required to perform the services effectively.
          </p>
          <p className="text-md pb-3 text-gray-700">
            You are encouraged to follow any guidance provided by our specialists to achieve the best outcomes from our services.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Failure to provide requested information or maintain communication may result in suspension or cancellation of services without financial compensation for services partially delivered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">INTELLECTUAL PROPERTY</h2>
          <p className="text-md pb-3 text-gray-700">
            All intellectual property rights related to materials, programs, and content provided by The Life Voyage remain our property or that of our licensors.
          </p>
          <p className="text-md pb-3 text-gray-700">
            You may use these materials solely for personal use and as intended by the purchased services.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Reproduction, redistribution, or commercial use of our materials without explicit written consent is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">PERSONAL INFORMATION & CONFIDENTIALITY</h2>
          <p className="text-md pb-3 text-gray-700">
            The Life Voyage complies with all applicable data protection laws and maintains strict confidentiality of your personal information.
          </p>
          <p className="text-md pb-3 text-gray-700">
            We will not share your information with third parties unless necessary to provide our services or as required by law.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Communication via email or other digital means is not routinely encrypted; please inform us if you require additional security measures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">FEES AND PAYMENT</h2>
          <p className="text-md pb-3 text-gray-700">
            Service fees are clearly listed on our website and include applicable taxes, where required.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Payments must be made at the time of booking unless a payment plan is agreed upon. Failure to complete payment may result in the suspension of services.
          </p>
          <p className="text-md pb-3 text-gray-700">
            If you choose a subscription or installment plan, payments will be automatically deducted on the agreed schedule. Failure to meet payment deadlines may result in service suspension or cancellation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">CANCELLATION AND REFUNDS</h2>
          <p className="text-md pb-3 text-gray-700">
            You have the right to cancel your booking within 14 days of purchase for a full refund, provided services have not commenced.
          </p>
          <p className="text-md pb-3 text-gray-700">
            If services have started within the 14-day period and you choose to cancel, a proportional fee for services rendered will be deducted from your refund.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Cancellations outside of the 14-day period are non-refundable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">LIABILITY</h2>
          <p className="text-md pb-3 text-gray-700">
            The Life Voyage does not guarantee specific outcomes and is not liable for any indirect or consequential loss arising from the use of our services.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Our liability is limited to the amount paid for the specific service in question.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">GOVERNING LAW</h2>
          <p className="text-md pb-3 text-gray-700">
          These terms are governed by the laws of England and Wales. Any disputes will be resolved in the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">MISCELLANEOUS</h2>
          <p className="text-md pb-3 text-gray-700">
            These Terms represent the entire agreement between you and The Life Voyage.
          </p>
          <p className="text-md pb-3 text-gray-700">
            Any waiver or modification of these Terms must be agreed upon in writing.
          </p>
          <p className="text-md pb-3 text-gray-700">
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
          </p>
        </section>

        <p className="text-md pb-3 text-gray-700">
          Thank you for choosing The Life Voyage. We look forward to supporting your wellness journey.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
