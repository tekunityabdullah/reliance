"use client";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#251B0E] text-white pt-16 sm:pt-20 lg:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14 text-center md:text-left">
          
          {/* LOGO + SOCIAL */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.png" alt="logo" className="w-40 sm:w-44 mb-6" />
            <p className="text-gray-300 mb-7 leading-relaxed max-w-[300px]">
              Property Management | Real Estate Brokerage
            </p>

            <div className="flex gap-3 justify-center md:justify-start">
              {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-[#9B6B27] rounded-full flex items-center justify-center cursor-pointer text-white hover:bg-[#F4C688] hover:text-black transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-7">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              {["Home","About Us","Services","Contact Us"].map(link => (
                <li key={link} className="hover:text-[#c9a84c] cursor-pointer transition">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-7">Contact Info</h3>
            <p className="text-gray-300 leading-8">
              579 5th Avenue, FL 2 <br/> New York, NY 10017
            </p>
            <p className="text-gray-300 mt-3">212-417-0471</p>
            <p className="text-gray-300 mt-3">info@reliance.nyc</p>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-7">Newsletter</h3>
            <p className="text-gray-300 mb-7 leading-relaxed max-w-[320px]">
              Subscribe to stay updated with the latest real estate insights.
            </p>

            <div className="flex items-center bg-[#5b4b3b] rounded-full pl-6 pr-2 py-2 w-full max-w-[320px]">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent outline-none text-[#e9dcc8] placeholder:text-[#e9dcc8] text-sm"
              />
              <button className="w-11 h-11 rounded-full bg-[#e6d6be] flex items-center justify-center text-[#2c1d0f] hover:scale-105 transition">
                <span className="text-2xl font-bold">»</span>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#4a3a2a] mt-16 sm:mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm text-center md:text-left">
          <p>© Reliance Realty 2025. All Rights Reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0 justify-center">
            <p className="hover:text-[#c9a84c] cursor-pointer">Privacy Policy</p>
            <p className="hover:text-[#c9a84c] cursor-pointer">Terms & Conditions</p>
          </div>
        </div>

      </div>
    </footer>
  );
}