import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold">Medicine Project</span>
          </Link>
          <p className="leading-relaxed my-4">
            Your trusted partner for quality medicines. Experience health and
            wellness with our wide range of pharmaceutical products and
            exceptional service.
          </p>
          <div className="flex gap-4 mt-2">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/medicines" className="hover:underline">
                Our Medicines
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Prescription Medicines
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                OTC Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Health Supplements
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Medical Equipment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone className="text-green-400 w-5 h-5" /> +977 9804778022
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-green-400 w-5 h-5" />{" "}
              info@medicineproject.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-green-400 w-5 h-5" /> Kathmandu, Bagmati
              Province, Nepal
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Medicine Project. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
