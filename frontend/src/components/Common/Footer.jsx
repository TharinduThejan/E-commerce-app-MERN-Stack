import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full py-12 border-t bg-gray-50">
      <div className="container px-6 mx-auto text-center">
        {/* Newsletter */}
        <div className="max-w-2xl mx-auto mb-12">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Newsletter
          </h3>
          <p className="mb-2 text-gray-500">
            Be the first to hear about new products, exclusive events and online
            offers.
          </p>
          <p className="mb-6 text-sm font-medium text-gray-600">
            Sign up and get 10% off your first order.
          </p>
          <form className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] p-3 text-sm border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm text-white transition-all bg-black rounded-md sm:w-auto sm:rounded-r-md sm:rounded-l-none hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div className="flex flex-col justify-center gap-16 mb-12 sm:flex-row">
          {/* Shop Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">Shop</h3>
            <ul className="space-y-2">
              {["About Us", "Shop", "Contact", "Blog"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800">
              Support
            </h3>
            <ul className="space-y-2">
              {["FAQs", "Shipping", "Returns", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Follow Us */}
        <div className="mb-12">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Follow Us
          </h3>
          <div className="flex justify-center mb-6 space-x-5">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <TbBrandMeta className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <IoLogoInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <RiTwitterXLine className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p className="flex items-center justify-center mt-2 text-gray-700">
            <FiPhoneCall className="w-5 h-5 mr-2" />
            123-456-7890
          </p>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 CompileTab. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
