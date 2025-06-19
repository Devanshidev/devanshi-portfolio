'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import devanshi from '../assets/devanshi.jpeg';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });

  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fullText = `
Hello! I'm Devanshi Dev, a passionate Frontend Developer with a strong eye for detail and a love for building clean, intuitive, and responsive user interfaces.

With a background in Information Technology and hands-on experience working at startups like Grovyo, I specialize in turning ideas into functional, engaging digital experiences using modern technologies like React.js, Next.js, Tailwind CSS, TypeScript and Framer Motion.

I enjoy crafting seamless user experiences and have a deep interest in UI design systems, component libraries, and performance optimization. Whether it's a sleek landing page or a dynamic dashboard, I strive to deliver solutions that are not only visually appealing but also user-focused and accessible.

I believe great design is as much about functionality as it is about aesthetics — and I bring that philosophy into every project I build.

Beyond coding, I’m always learning — experimenting with animations, improving design workflows, and staying updated with the latest trends in web development.

Let’s create something beautiful and meaningful together!
`;

  const shortText = fullText.split('\n\n')[0]; 

  return (
    <div className="bg-[#1E1D1D] py-10 px-4" ref={ref}>
      <motion.div
        className="mx-auto bg-[#262626] rounded-2xl shadow-lg p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Heading */}
        <motion.h2
          className="bg-teal-500 text-black font-sans font-semibold text-[14px] px-4 py-1 rounded-t-xl w-20 shadow-md"
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <div className="h-[1px] bg-teal-500"></div>

        {/* Content */}
        <div className="flex flex-row  justify-between items-start gap-6 mt-4">
         
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-gray-200 text-[13px] font-sans leading-relaxed whitespace-pre-line">
              {isMobile && !showMore ? shortText : fullText}
            </p>

            
            {isMobile && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-teal-400 text-xs mt-2 underline font-sans"
              >
                {showMore ? 'Read Less ↑' : 'Read More ↓'}
              </button>
            )}
          </motion.div>

          {/* Image */}
          <motion.div
            className="rounded-xl shadow-[#424242] shadow-2xl pn:max-sm:shadow-none"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={devanshi}
              alt="Devanshi"
              width={240}
              className="rounded-xl object-cover pn:max-sm:mt-5"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
