import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    alert("Password reset link sent to your email!");
  };

  return (
    <div className="py-14 flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-green-700 px-4 min-h-screen">
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-lg p-8 pt-5">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Forgot Password
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
