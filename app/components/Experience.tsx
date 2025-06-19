'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type Experience = {
  title: string;
  company: string;
  date: string;
  details: string;
};

const experiences : Experience[] = [
  {
    title: 'Frontend Developer Intern',
    company: 'Grovyo',
    date: 'May 2024 – Jul 2024',
    details:
      'Developed modern, responsive user interfaces using React.js and Tailwind CSS. Collaborated closely with the design and product teams to translate wireframes into reusable components. Enhanced user experience through animations and layout optimizations. Contributed to the development of a scalable UI system for Grovyo’s core platform.',
  },
  {
    title: 'Web Developer Intern',
    company: 'Lynx Arch Tech Pvt. Ltd.',
    date: 'May 2023 – Jun 2023',
    details:
      'Designed and implemented a responsive marketing website with interactive components using HTML, CSS, and JavaScript. Leveraged Framer Motion for smooth animation effects and integrated a chatbot system to improve client engagement. Ensured cross-browser compatibility and optimized performance for both desktop and mobile platforms.',
  },
  {
    title: 'Web Developer Intern',
    company: 'LetsGrowMore',
    date: 'Jan 2023 – Feb 2023',
    details:
      'Completed multiple frontend development tasks as part of a virtual internship program. Created visually appealing static web pages and mini-projects using HTML, CSS, and JavaScript. Focused on improving core development skills including layout design, responsiveness, and code reusability.',
  },
];

type ExperienceCardProps = {
  exp: Experience;
  index: number;
};

const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    margin: '-100px 0px',
  });

  return (
    <motion.div
      ref={cardRef}
      className="relative mb-10 pl-6"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Dot */}
      <span className="absolute left-0 top-16 w-2 h-2 bg-teal-500 rounded-full  shadow-md" />

      {/* Card Content */}
      <div className=" rounded-xl p-5 shadow-lg hover:shadow-teal-500/20 transition duration-300">
        <h3 className="text-lg text-teal-400 font-semibold mb-1">{exp.title}</h3>
        <p className="text-sm text-gray-400 italic mb-2">
          {exp.company} &nbsp; | &nbsp; {exp.date}
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">{exp.details}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="bg-[#1E1D1D] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl text-teal-500 font-sans font-semibold text-center mb-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Experience
        </motion.h2>

        <div className="relative pl-6">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-teal-500 to-transparent" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <ExperienceCard exp={exp} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
