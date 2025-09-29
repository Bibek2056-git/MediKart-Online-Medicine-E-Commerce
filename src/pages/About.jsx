import React from 'react';

const About = () => {
  return (
    <div className="py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">About Medicine Project</h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Medicine Project is dedicated to providing quality medicines and healthcare products to everyone.
        Our mission is to make healthcare accessible, affordable, and convenient for all.
        We partner with trusted pharmacies and manufacturers to ensure you get genuine products delivered to your doorstep.
      </p>
      <div className="bg-green-100 rounded-lg p-6 max-w-xl mx-auto">
        <h2 className="text-xl font-semibold text-green-800 mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-left text-gray-800">
          <li>Wide range of medicines and health products</li>
          <li>Fast and reliable delivery</li>
          <li>24/7 customer support</li>
          <li>Trusted by thousands of customers</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
