import React, { useEffect } from "react";
import { Facebook, Mail, Lock, Instagram, HeartPulse } from "lucide-react";
import ScrollReveal from "scrollreveal";
import Footer from "../components/Footer";

const Login = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-x-alt", {
      origin: "right",
      distance: "100px",
      duration: 1500,
      easing: "ease-in-out",
      reset: false,
    });
  }, []);

  return (
    <div className="py-14 flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-green-700 px-4">
      {/* Logo */}
      <div className="text-center mb-6">
        <div className="text-white text-3xl font-bold flex justify-center items-center gap-2">
          <HeartPulse className="w-10 h-10" /> <span>Medicine Project</span>
        </div>
      </div>
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-8 pt-5 reveal-x-alt">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to your Medicine Project account
        </p>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Forgot Password link */}
            <div className="text-right mt-2">
              <a
                href="/forgot-password"
                className="text-green-500 hover:underline text-sm"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-2 justify-between text-sm mb-6">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                className="cursor-pointer appearance-none h-4 w-4 border border-gray-300 rounded-sm checked:bg--500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 checked:after:content-['✔'] checked:after:block checked:after:text-white checked:after:text-xs checked:after:mx-auto checked:after:mt-0.5"
              />
              <span className="text-base">Remember me</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-green-500 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            Sign In
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
          Don't have an account?{" "}
          <a href="/register" className="text-green-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
