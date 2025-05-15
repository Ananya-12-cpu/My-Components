'use client'

import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ComingSoon() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-2xl p-10 shadow-xl text-center max-w-lg w-full border border-white/20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fadeIn mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-200 text-lg mb-6">
          We're crafting something incredible. Be the first to know when we launch!
        </p>

        

        <div className="flex justify-center gap-4 text-white text-lg">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
