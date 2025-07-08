import React, {useState, useEffect} from 'react';
import Modal from '../components/Modal';
import { images } from '../assets';
const services = [
  {
    title: "Comprehensive Cancer Care",
    price: "£800",
    description: "Tailored support for individuals navigating life with cancer.",
    icon: images.s1,
    info: <ul className="list-disc pl-6 space-y-2">
    <li>Free 15-min Pre-assessment call</li>
    <li>Initial 90-minute appointment: Comprehensive fact-gathering</li>
    <li>2 follow-up 45-minute sessions: Scheduled 3–4 weeks apart</li>
    <li>30-minute final session: Review and next steps</li>
    <li>Customized recommendations: Tailored action plans based on the client’s unique needs</li>
    <li>Progress tracking tools provided</li>
    <li>Email and text support: As needed during the 3-month period</li>
    <li>Exclusive WhatsApp community support group access: This group will be for current and past clients to share progress, seek advice, and build accountability with others</li>
    <li>Customised Add-ons: You may book extra services to add to this package at reduced rates</li>
    <li>Total Package Price: £800 (split into 2-month payment plan 1 at payment i.e 1st January £450 & 2nd payment 1st February £350)</li>
  </ul>,
    paylink: "https://buy.stripe.com/cN27tre07dxn3y8aEE",
    firstInstalment: "https://buy.stripe.com/28o8xv8FN0KBc4E6or",
    // firstInstalment: "https://buy.stripe.com/test_14k7uu0Wi1o7egEaEE",
    secondInstalment: "https://buy.stripe.com/3cseVTaNV78Z7OofZ2"
  },
  {
    title: "Returning Customers Package",
    price: "£650",
    description: "Exclusive discounted package for returning clients.",
    icon: images.s2,
    info: <ul className="list-disc pl-6 space-y-2">
    <li>Free 15-min Pre-assessment call</li>
    <li>Initial 90-minute appointment: Comprehensive fact-gathering</li>
    <li>2 follow-up 45-minute sessions: Scheduled 3–4 weeks apart</li>
    <li>30-minute final session: Review and next steps</li>
    <li>Customized recommendations: Tailored action plans based on the client’s unique needs</li>
    <li>Progress tracking tools provided</li>
    <li>Email and text support: As needed during the 3-month period</li>
    <li>Exclusive WhatsApp community support group access: This group will be for current and past clients to share progress, seek advice, and build accountability with others</li>
    <li>Customised Add-ons: You may book extra services to add to this package at reduced rates</li>
    <li>Total Package Price: £650 (split into 2-month payment plan 1 at payment i.e 1st January £400 & 2nd payment 1st February £250)</li>
  </ul>,  
    paylink: "https://buy.stripe.com/7sI9Bz8FN1OFc4E149",
    firstInstalment: "https://buy.stripe.com/3csfZX4px8d36KkfZ9",
    secondInstalment: "https://buy.stripe.com/3cs3dbg8fgJz5Gg6oA"


  },
  {
    title: "Holistic Cancer Prevention Program",
    price: "£700 (1-on-1) / £480 (Group)",
    description: "Sustainable lifestyle changes with our 6-month coaching program.",
    icon: images.s3,
    info: <ul className='list-disc pl-6 space-y-2x'>
    <li>Month 1: Revamping the Pantry</li>
    <li>Month 2: Healthier Meals & Hydration</li>
    <li>Month 3: Low-Intensity Exercise</li>
    <li>Month 4: Supplementation & Strength</li>
    <li>Month 5: Integration & Planning</li>
    <li>Month 6: Household & Personal Care Detox</li>
  </ul>,
    paylink: "https://buy.stripe.com/dR69Bz8FN2SJ7Oo7st",
    firstInstalment: "https://buy.stripe.com/28o8xv8FN0KBc4E6or",
    secondInstalment: "https://buy.stripe.com/3cseVTaNV78Z7OofZ2"
  }
];

export default function Services() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modaltitle, setModaltitle] = useState("");
  const [modalprice, setModalprice] = useState("");
  const [modalpaylink, setModalpaylink] = useState("");
  const [modalfirstInstalment, setModalfirstInstalment] = useState("");
  const [modalsecondInstalment, setModalsecondInstalment] = useState("");

  // Open the modal with different content
  const handleOpenModal = (content:any, title:any, price:any, paylink:any, firstInstalment:any, secondInstalment:any) => {
    setModalContent(content);
    setModaltitle(title);
    setModalprice(price);
    setModalpaylink(paylink);
    setModalOpen(true);
    setModalfirstInstalment(firstInstalment);
    setModalsecondInstalment(secondInstalment);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            We offer personalized, compassionate care tailored to your needs.
          </p>
          <div className="mt-6">
            <a
              href='https://calendly.com/thelifevoyage-info/15min'
              target='blank'
              className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 shadow-soft"
            >
              Book a free 15-minute consultation
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all">
              {/* <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                <service.icon className="h-6 w-6" />
              </div> */}
              <img src={service.icon} alt="" className='rounded'/>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-primary font-semibold">{service.price}</p>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <button
              onClick={() => handleOpenModal(service.info, service.title, service.price, service.paylink, service.firstInstalment, service.secondInstalment)}
              className="mt-6 w-full px-4 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Learn More
              </button>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} fullPaymentLink={modalpaylink} content={modalContent} title={modaltitle} price={modalprice} firstPaymentLink={modalfirstInstalment} secondPaymentLink={modalsecondInstalment} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}