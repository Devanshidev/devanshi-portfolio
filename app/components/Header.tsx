'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ← React Icons
import { IoMenu,IoCloseSharp  } from "react-icons/io5";
import { MdEmail, MdPhone } from 'react-icons/md';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-1.5 backdrop-blur-xs bg-black/5 z-50">
      <h1 className="text-xl font-serif font-medium text-teal-500">Devanshi Dev</h1>

      <button onClick={() => setIsOpen(true)} className="text-white  ">
        <IoMenu size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-screen bg-[#1e1e1e] shadow-lg z-[100]"
          >
            <div className="flex justify-end p-4  bg-[#1e1e1e]">
              <button onClick={() => setIsOpen(false)} className="text-white ">
                <IoCloseSharp  size={20} />
              </button>
            </div>

            <div className="px-6 text-white space-y-8   bg-[#1e1e1e]">
              {/* SOCIAL */}
              <div>
                <h3 className="text-xs text-gray-400">SOCIAL</h3>
                <ul className="space-y-2 mt-2">
                  <li><a href="https://github.com/Devanshidev" target="_blank" rel="noreferrer" className="hover:text-teal-500 font-sans text-sm">GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/devanshi-dev/" target="_blank" rel="noreferrer" className="hover:text-teal-500 font-sans text-sm">LinkedIn</a></li>
              
               
                </ul>
              </div>

              {/* MENU */}
             <div>
  <h3 className="text-xs text-gray-400">MENU</h3>
  <ul className="space-y-2 mt-2">
    {[
      { label: "Home", href: "#home", color: "bg-yellow-500" },
      { label: "About Me", href: "#about", color: "bg-blue-500" },
       { label: "Projects", href: "#projects", color: "bg-purple-500" },
      { label: "Experience", href: "#experience", color: "bg-green-500" },
      { label: "Skills", href: "#skills", color: "bg-cyan-500" },
    ].map((item) => (
      <li key={item.label} className="group flex items-center gap-2 transition-all duration-300">
        <span className={`h-2 w-2 ${item.color} rounded-full`}></span>
        <a
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="font-sans text-sm text-gray-300 group-hover:text-white group-hover:scale-[1.05] transition-all duration-300"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</div>


              {/* CONTACT */}
           <div className="pt-6 border-t border-gray-700 text-sm bg-[#1e1e1e]">
  <p className="text-gray-400 font-sans mb-2">GET IN TOUCH</p>

  <a
    href="mailto:devanshidev4@gmail.com"
    className="text-[13px] text-white hover:text-teal-500 flex items-center gap-2 mb-1"
  >
    <MdEmail className="text-[16px]" />
    devanshidev4@gmail.com
  </a>

  <a
    href="tel:+91 93356 17468"
    className="text-[13px] text-white hover:text-teal-500 flex items-center gap-2"
  >
    <MdPhone className="text-[16px]" />
    +91 93356 17468
  </a>
</div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
