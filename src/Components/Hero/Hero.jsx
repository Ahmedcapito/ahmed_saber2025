import React from "react";
import "./hero.css";
import image from "../../../public/image.png";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <motion.div
      className="container__hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* النص */}
      <motion.div
        className="text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1>
          Hi, I'm Ahmed Saber <br />
          <span>a professional coder</span>
        </h1>

        {/* برجراف يظهر بحروف */}
        <TypeAnimation
          sequence={[
            `I'm Ahmed Saber, a passionate Front-End Developer focused on building fast, modern, and user-friendly websites. I work with React.js and Next.js, along with Tailwind CSS, to create beautiful and smooth user experiences. My goal is to turn ideas into interactive websites that provide real value to users.`,
            1000, // تفضل الجملة موجودة لمدة ثانية بعد ما تخلص
          ]}
          speed={50} // سرعة الكتابة (كل ما قل الرقم زادت السرعة)
          style={{ fontSize: "1rem", marginTop: "1rem", lineHeight: "1.6rem" }}
          wrapper="p"
          repeat={0} // 0 معناها مرة واحدة فقط
        />

        {/* أيقونات السوشيال ميديا */}
        <div className="icons">
  
          
          <a href="http://www.youtube.com/@codinity-1" target="_blank">
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-saber-a644b9312/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ahmedcapito">
            <FaGithub />
          </a>
        </div>

        <a href="/Ahmed_Saber_FrontEnd_CV.pdf" target="_blank" className="btns">
          <button>View CV</button>
        </a>
      </motion.div>

      {/* الصورة */}
      <motion.div
        className="circle"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img src={image} alt="Ahmed Saber" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
