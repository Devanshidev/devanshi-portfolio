'use client';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, 
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiNextdotjs, SiFramer, SiFirebase, 
  SiTypescript, SiRedux, SiMongodb, SiFigma 
} from 'react-icons/si';
import { BsStars } from 'react-icons/bs';
const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Node.js', icon: FaNode },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Figma', icon: SiFigma },
  { name: 'Jitter', icon: BsStars },
];


const Skills = () => {
  return (
    <section className="bg-[#1E1D1D] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-semibold font-sans text-teal-500 mb-20 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Stack
        </motion.h2>

        <div className="grid grid-cols-5 pn:max-sm:grid-cols-3 pn:max-sm:gap-5 gap-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
                className="group relative bg-[#252525] border border-[#2e2e2e] rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-teal-500/20 transition-transform duration-300 hover:scale-[1.04]"
              >
                {/* glow border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <Icon className="text-4xl text-teal-500 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs text-gray-200 font-medium tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
