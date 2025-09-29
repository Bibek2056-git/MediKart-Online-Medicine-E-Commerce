import React, { useEffect } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Search,
  HeartPulse,
  Pills,
} from "lucide-react";

//Scroll Reveal
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".hero-reveal", {
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      origin: "left",
      reset: false,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".head-reveal", {
      scale: 0.85,
      distance: "0px",
      duration: 1500,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".reveal-y", {
      origin: "bottom",
      distance: "100px",
      duration: 1500,
      interval: 200,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <section className="bg-gradient-to-br from-green-500 to-green-700 text-white sm:py-28 py-16 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 hero-reveal">
        Find Your <span className="text-yellow-400">Essential Medicines</span>
      </h1>
      <p className="text-lg sm:text-xl mb-12 text-gray-200 hero-reveal">
        Discover a wide range of quality medicines and healthcare products.
        Order now for fast delivery and trusted service.
      </p>

      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black hero-reveal">
        {/* Medicine Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Pills className="w-5 h-5" /> <span>Medicine Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter medicine name"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <HeartPulse className="w-5 h-5" /> <span>Quantity</span>
          </label>
          <input
            type="number"
            min="1"
            placeholder="Qty"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Delivery Date */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className="w-5 h-5" /> <span>Delivery Date</span>
          </label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Delivery Time */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Clock className="w-5 h-5" /> <span>Delivery Time</span>
          </label>
          <input
            type="time"
            className="w-full p-2 border border-gray-300 rounded cursor-pointer"
          />
        </div>

        {/* Button */}
        <div>
          <button className="flex items-center justify-center gap-2 w-full cursor-pointer bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300">
            <Search className="w-5 h-5" /> <span>Search Medicines</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-white hero-reveal">
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">1000+</h2>
          <p className="sm:text-lg text-gray-200">Medicines Available</p>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">100+</h2>
          <p className="sm:text-lg text-gray-200">Pharmacies</p>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">24/7</h2>
          <p className="sm:text-lg text-gray-200">Support</p>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">99%</h2>
          <p className="sm:text-lg text-gray-200">Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
