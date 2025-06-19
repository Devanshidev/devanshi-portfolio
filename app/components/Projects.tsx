'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import taskmanager from '../assets/taskmanager.png';
import softsell from '../assets/softsell.png';
import netflix from '../assets/netflix.png';
import grovyo from '../assets/grovyo.png';
import asteria from '../assets/asteria.png';
import adminpanel from '../assets/adminpanel.png';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const projects = [
  {
    title: 'Task Manager',
    description: 'Task Manager is a responsive web app to add, complete, delete, and filter tasks with localStorage support and a clean, mobile-friendly UI.',
    github: 'https://github.com/Devanshidev/task-manager',
    live: 'https://task-manager-khaki-mu.vercel.app/',
    image: taskmanager,
  },
  {
    title: 'SoftSell',
    description: 'SoftSell is a sleek marketing site built with Next.js and Tailwind CSS.It features responsive design, subtle animations, and a built-in chatbot.Optimized for showcasing products across all devices.',
    github: 'https://github.com/Devanshidev/Soft-Sell',
    live: 'https://soft-sell-khaki.vercel.app/',
    image: softsell,
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix Clone is built with React and Tailwind CSS.It includes a responsive layout, movie thumbnails, and hover effects.Designed to mimic the look and feel of the original Netflix homepage.',
    github: 'https://github.com/Devanshidev/netflix',
    image: netflix,
  },
  {
    title: 'Grovyo',
    description: 'Grovyo  is a responsive website I built during my frontend internship at Grovyo, using React and Tailwind CSS, focusing on clean UI and mobile-first design.',
    github: 'https://github.com/Devanshidev/mainsite',
    image: grovyo,
  },
  {
    title: 'Asteria UI',
    description: 'Asteria UI is a modern, responsive UI component library built with React and Tailwind CSS. It offers sleek, customizable, and production-ready components to speed up frontend development and maintain design consistency.',
    github: 'https://github.com/Devanshidev/asteriaui',
    image: asteria,
  },
  // {
  //   title: 'Chat App',
  //   description: 'A real-time chat application using Firebase, sticky date popups, and dynamic avatars.',
  //   github: 'https://github.com/Devanshidev/chatapp',
  //   image: '/projects/chatapp.png',
  // },
   {
    title: 'Admin Panel',
    description: 'Grovyo Admin Panel was built during my internship to manage internal operations.Developed using React and Tailwind CSS, with a focus on dashboard UI and data handling.',
    github: 'https://github.com/Devanshidev/adminpanel',
    image: adminpanel,
  },
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialProjects = projects.slice(0, 3);

  return (
    <div className="bg-[#1E1D1D] py-14 px-6" ref={ref}>
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl font-sans font-semibold text-teal-500 text-center mb-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        {/* MOBILE VIEW */}
        {isMobile ? (
          <>
            {!showAll ? (
              <div className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory pb-3 ">
                {initialProjects.map((project, i) => (
                  <div
                    key={i}
                    className="min-w-[80%] max-w-[90%] bg-[#1e1e1e] snap-center flex-shrink-0 p-4 rounded-2xl shadow-xl border border-[#302f2f]"
                  >
                    <div className="relative w-full h-40 rounded-lg overflow-hidden mb-2 border border-[#302f2f]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain bg-[#252323]"
                      />
                    </div>
                    <h3 className="text-teal-500 text-lg font-medium font-serif mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    <div className="flex gap-4 mt-3">
                      <a href={project.github} target="_blank" className="text-sm text-gray-300 hover:text-teal-400 flex items-center gap-2">
                        <FaGithub /> GitHub
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" className="text-sm text-gray-300 hover:text-teal-400 flex items-center gap-2">
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                <div
                  onClick={() => setShowAll(true)}
                  className="min-w-[30%] snap-center flex-shrink-0 flex items-center justify-center text-teal-500 font-medium text-center text-sm cursor-pointer"
                >
                  Show More
                  <div className='ml-2 text-2xl'><MdOutlineKeyboardDoubleArrowRight /></div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-[#1e1e1e] p-4 rounded-2xl shadow-xl border border-[#302f2f]"
                  >
                    <div className="relative w-full h-40 rounded-lg overflow-hidden mb-2 border border-[#302f2f] ">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain bg-[#252323]"
                      />
                    </div>
                    <h3 className="text-teal-500 text-lg font-medium font-serif mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    <div className="flex gap-4 mt-3">
                      <a href={project.github} target="_blank" className="text-sm text-gray-300 hover:text-teal-400 flex items-center gap-2">
                        <FaGithub /> GitHub
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" className="text-sm text-gray-300 hover:text-teal-400 flex items-center gap-2">
                          <FaExternalLinkAlt /> Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setShowAll(false);
                    ref.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-teal-400 underline text-sm font-medium self-end mt-2"
                >
                  Show Less
                </button>
              </div>
            )}
          </>
        ) : (
          // DESKTOP VIEW
          <div className="grid grid-cols-3  gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-[#1e1e1e] p-2 rounded-2xl shadow-xl border border-[#302f2f]"
              >
                <div className="relative w-full h-56 rounded-lg overflow-hidden mb-2 border border-[#302f2f]">
                  <Image
                    src={project.image}
                    alt={project.title}
                  
                    className="object-cover bg-[#252323]"
                  />
                </div>
                <h3 className="text-teal-500 text-lg font-medium font-serif mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <div className="flex gap-4 mt-3">
                  <a href={project.github} target="_blank" className="text-sm text-gray-300 hover:text-teal-400 flex items-center gap-2">
                    <FaGithub /> GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" className="text-sm text-gray-300 hover:text-teal-400 flex items-center gap-2">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
