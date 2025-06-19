import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta, TbFilePhone } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4 lg:px-0">
        <div className="px-4">
          <h3 className="mb-4 text-lg text-gray-800">Newsletter</h3>
          <p className="mb-4 text-gray-500">
            be the first to hear about new products,exclusive events and online
            offers.
          </p>
          <p className="mb-6 text-sm font-medium text-gray-600">
            Sign up and get 10% off your first order.
          </p>
          {/* Newsletter Form */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm transition-all border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm text-white transition-all bg-black rounded-r-md hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Links Section */}
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/*support links*/}
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Support</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 transition-colors hover:text-gray-800"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/*follow us section*/}
        <div>
          <h3 className="mb-4 text-lg text-gray-800">Follow Us </h3>

          <div className="flex items-center mb-6 space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <TbBrandMeta className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <IoLogoInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <RiTwitterXLine className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            123-456-7890
          </p>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="container px-4 pt-6 mx-auto mt-12 border-t border-gray-200 lg:px-0">
        <p className="text-sm tracking-tighter text-center text-gray-500">
          2025 ,CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
