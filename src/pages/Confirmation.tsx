import React,{useEffect, useState} from "react";
import Stripe from 'stripe';
import { useLocation, Link } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const Confirmation = () => {
  const location = useLocation();
  const [userDetails, setUserDetails] = useState<any>({})
  const [paymentStatus, setPaymentStatus] = useState<string>("");
const apikey:any = process.env.STRIPE_URL
// const stripe = new Stripe("");
const stripe = new Stripe(apikey);
async function getPaymentInfo(checkoutSessionId: string) {
  try {
    // Retrieve the Checkout Session
    const checkoutSession = await stripe.checkout.sessions.retrieve(checkoutSessionId, {
      expand: ['payment_intent', 'line_items'], // Expand the payment_intent to get more details
    });

    // Extract customer email and payment details
    const customer_email = checkoutSession.customer_details?.email;
    const customer_name = checkoutSession.customer_details?.name;
    const service_name = checkoutSession.line_items?.data[0]?.description;
    const country = checkoutSession.customer_details?.address?.country;
    const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

    // Log or return the information
    
   
    return {
      customer_name: customer_name,
      customer_email: customer_email,
      service_name: service_name,
      country: country,
      payment_intent_id: paymentIntent.id,
      amount: paymentIntent.amount/100, 
      currency: paymentIntent.currency,
      status: paymentIntent.status,
    };
  } catch (error) {
    console.error('Error retrieving payment info:', error);
    throw error;
  }
  
}

const mails =async (paymentInfo:any) => {
try {
  const response = await axios.post("https://backend.thelifevoyage.com/app/confirmation/", paymentInfo);
  
      if (response.status === 200 || response.status === 201) {
        // Notify success
        toast.success("Email Sent Successfully!");
      } else {
        // Handle unexpected status codes
        toast.error("Failed to send the message. Please try again.");
      }
} catch (error) {
  console.log(error);
}
}

  useEffect(() => {
    // Scroll to top of the page when the component mounts
    window.scrollTo(0, 0);

  }, []);
  useEffect(() => {
    // Scroll to top of the page when the component mounts
    const queryParams = new URLSearchParams(location.search);
    
    // Get the 'id' query parameter
    const id = queryParams.get('id');

    if (id) {
      const checkoutSessionId = id;
      getPaymentInfo(checkoutSessionId)
        .then((paymentInfo) => {
          setUserDetails(paymentInfo);
          setPaymentStatus(paymentInfo?.status || "");
          if (paymentInfo?.status === "succeeded") {
            mails(paymentInfo);
          }
        })
        .catch((error) => {
          console.error('Failed to retrieve payment info:', error);
        });
    } else {
      console.log('No ID found in the URL');
    }
  }, []);
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all hover:scale-105 hover:shadow-3xl">
        {paymentStatus === "succeeded" ? (
          <>
            {/* Success Icon */}
            <div className="flex justify-center animate-bounce">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mt-6">
              Payment Successful!
            </h1>
            {/* Description */}
            <p className="text-gray-600 mt-4">
              Thank you for your payment. Your transaction was completed successfully.
            </p>
            <p className="text-gray-600 mt-2 font-medium">
              Please check your email for further instructions.
            </p>
            {/* Payment Details */}
            <div className="mt-6 text-left bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userDetails.customer_name}
                  </p>
                </div>
                {/* Amount */}
                <div>
                  <p className="text-sm text-gray-500">Amount Paid</p>
                  <p className="text-lg font-semibold text-gray-900">
                    £{userDetails.amount?.toFixed(2)}
                  </p>
                </div>
                {/* Email */}
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userDetails.customer_email}
                  </p>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="mt-8">
              <Link
                to="/"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Return to Home
              </Link>
            </div>
          </>
        ) : paymentStatus ? (
          <>
            {/* Failure Icon */}
            <div className="flex justify-center animate-bounce">
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-900 mt-6">
              Payment Not Successful
            </h1>
            {/* Description */}
            <p className="text-gray-600 mt-4">
              Unfortunately, your payment was not successful. Please try again or contact support if you believe this is an error.
            </p>
            {/* Button to Services */}
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              >
                Return to Services
              </Link>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Loading payment status...</p>
        )}
      </div>
    </div>
  );
};

export default Confirmation;
