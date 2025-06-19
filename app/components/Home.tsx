"use client";
import React, { useEffect, useState } from "react";
import { motion, easeInOut } from "framer-motion";


const Home = () => {
  const fullText = "Transforming ideas into, engaging digital experiences.";
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);


  const commaIndex = fullText.indexOf(",");
  const line1 = displayedText.slice(0, Math.min(commaIndex + 1, displayedText.length));
  const line2 =
    displayedText.length > commaIndex + 1
      ? displayedText.slice(commaIndex + 2)
      : "";

  const blink = {
    animate: {
      opacity: [0, 1, 0],
    },
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="bg-[#1E1D1D] flex justify-center items-start h-screen flex-col pl-40 pn:max-sm:items-center  pn:max-sm:px-5">
     
      <div className="flex justify-center items-center gap-2 "> 
        <div className="p-1 bg-teal-500 rounded-sm animate-pulse pn:max-sm:mb-5 "></div>
      <div className="font-sans text-sm text-white pn:max-sm:text-[13px] ">Open to full-time, remote, or freelance roles — actively seeking impactful opportunities to contribute and grow.</div></div>
     
      {/* <motion.div className="text-[50px] font-semibold font-sans bg-gradient-to-r from-green-700 to-gray-200 text-transparent bg-clip-text  w-[800px] mt-5"> */}
            <motion.div className="text-[50px]  font-semibold font-sans text-white mt-5 pn:max-sm:text-[40px] pn:max-sm:text-center">
        <p className="inline-block">
          {line1}
          {displayedText.length <= commaIndex && (
        <motion.span
  {...blink}
  className="text-white font-extralight font-sans"
  animate={{ opacity: [0, 1] }}
  transition={{ duration: 1, repeat: Infinity, ease: easeInOut }} 
>
  |
</motion.span>
          )}
        </p>
        <p className="inline-block">
          {line2}
          {displayedText.length > commaIndex && (
            <motion.span
              {...blink}
              className="text-white font-extralight font-sans"
            >
              |
            </motion.span>
          )}
        </p>
      </motion.div>
     {/* Buttons */}
<div className="flex gap-6 mt-6 ">
  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  onClick={() => window.location.href = "#contact"}
  className="bg-teal-500 text-black font-sans font-semibold text-[14px] px-6 py-3 rounded-2xl shadow-lg "
>
  Get in Touch
</motion.button>

  <motion.a
    href="/DEVANSHI RESUME.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
    className="bg-teal-500/15 border border-teal-500 text-teal-500 px-9 py-3 rounded-2xl font-sans font-semibold text-[14px]  shadow hover:shadow-white/40 transition-shadow"
  >
    Resume
  </motion.a>
</div>

    </div>
  );
};

export default Home;
