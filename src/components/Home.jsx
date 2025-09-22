import React from "react";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* Replace Hero with a medicine-related hero section */}
      <section className="bg-green-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Welcome to Medicine Project
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your one-stop solution for quality medicines and healthcare products.
        </p>
        <a
          href="/medicines"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Browse Medicines
        </a>
      </section>
      {/* ...other medicine-related sections can be added here... */}
      <Footer />
    </>
  );
};

export default Home;
