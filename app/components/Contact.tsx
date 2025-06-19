'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-[#1E1D1D] py-16 px-6 text-gray-200" id="contact">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold font-sans text-teal-500 mb-4 ">Let’s Connect</h2>

        <p className="text-[14px] font-sans text-gray-300 mb-6">
          Have a project in mind or just want to say hi ? <br />
          I’m always excited to collaborate on meaningful ideas.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="  text-white px-8 py-3 rounded-full text-lg font-medium font-sans hover:text-teal-500 transition mb-8 pn:max-sm:text-[17px]"
        >
          Let’s Build Something Awesome !!
        </a>

        {/* Socials */}
        <div className="flex justify-center space-x-10 text-2xl mt-4 mb-6">
          <a href="https://github.com/Devanshidev" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/devanshi-dev/" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            <FaLinkedin />
          </a>
         
          <a href="mailto:devanshidev4@gmail.com" className="hover:text-teal-400">
            <FaEnvelope />
          </a>
          
        </div>

        {/* Optional Resume Button */}
 <a
  href="/DEVANSHI RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 text-sm text-gray-300 underline hover:text-teal-300 sm:hidden"
>
  View Resume (Tap & Hold to Download)
</a>

{/* 💻 Desktop View: Direct Download */}
<a
  href="/DEVANSHI RESUME.pdf"
  download
  className=" mt-4 text-sm text-gray-300 underline hover:text-teal-300 pn:max-sm:hidden "
>
  Download Resume
</a>


        <p className="text-xs text-gray-600 mt-8 mb-2">Built with 💻 Next.js & Tailwind CSS</p>
        <a href="mailto:devanshidev4@gmail.com" className="text-xs text-gray-400  hover:text-teal-500">mailto : devanshidev4@gmail.com</a>
      </motion.div>
    </section>
  );
};

export default Contact;
