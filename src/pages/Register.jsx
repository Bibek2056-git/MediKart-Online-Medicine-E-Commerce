import React, { useEffect } from "react";
import {
  Facebook,
  Mail,
  Lock,
  Instagram,
  HeartPulse,
  User,
} from "lucide-react";
import ScrollReveal from "scrollreveal";
import Footer from "../components/Footer";

const Register = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-x", {
      origin: "left",
      distance: "100px",
      duration: 1500,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div className="py-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-green-700 px-2 sm:px-4">
      {/* Logo */}
      <div className="text-center mb-6">
        <div className="text-white text-2xl sm:text-3xl font-bold flex justify-center items-center gap-2">
          <HeartPulse className="w-8 h-8 sm:w-10 sm:h-10" />{" "}
          <span>Medicine Project</span>
        </div>
      </div>
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-4 sm:p-8 pt-5 reveal-x">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join thousands of healthy customers
        </p>

        {/* Form */}
        <form>
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Middle Name"
                className="w-full bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Email  */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-0 gap-2 justify-between text-sm mb-6">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                className="cursor-pointer appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg-green-500 checked:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 checked:after:content-['✔'] checked:after:block checked:after:text-white checked:after:text-xs checked:after:mx-auto checked:after:mt-0.5 checked:after:font-bold checked:after:leading-none"
              />
              <span className="text-base">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-between gap-6 my-6">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="text-sm text-gray-400 w-full">Or continue with</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>

        {/* Social Login */}
        <div className="flex gap-4">
          <button className="w-1/2 flex cursor-pointer items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-green-700 hover:text-white transition duration-300">
            <Instagram className="mr-2" /> Google
          </button>
          <button className="w-1/2 flex cursor-pointer items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-green-700 hover:text-white transition duration-300">
            <Facebook className="mr-2" /> Facebook
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
