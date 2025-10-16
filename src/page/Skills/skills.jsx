import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaCodeBranch,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import "./skills.css";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const languages = [
  { name: "HTML", level: "Advanced", icon: <FaHtml5 className="html" /> },
  { name: "CSS", level: "Advanced", icon: <FaCss3Alt className="css" /> },
  { name: "JavaScript", level: "Intermediate", icon: <FaJs className="js" /> },
];

const frameworks = [
  { name: "React", level: "Intermediate", icon: <FaReact className="react" /> },
  { name: "Next.js", level: "Beginner", icon: <SiNextdotjs className="next" /> },
  { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="tailwind" /> },
  { name: "Bootstrap", level: "Intermediate", icon: <FaBootstrap className="bootstrap" /> },
];

const tools = [
  {
    name: "Git",
    desc: "Version control system",
    icon: <FaCodeBranch className="git" />,
  },
  {
    name: "GitHub",
    desc: "Project hosting & collaboration",
    icon: <FaGithub className="github" />,
  },
  {
    name: "Visual Studio Code",
    desc: "Source code editor",
    icon: <VscVscodeInsiders className="vscode" />,
  },
];

export default function Skills() {
  return (
    <motion.div
      className="skills-wrapper"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="section-title">Languages</h2>
      <div className="skills-grid">
        {languages.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="section-title">Frameworks</h2>
      <div className="skills-grid">
        {frameworks.map((fw, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">{fw.icon}</div>
            <h3>{fw.name}</h3>
            <p>{fw.level}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="section-title">Tools</h2>
      <div className="skills-grid">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
