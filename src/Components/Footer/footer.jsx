import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import './footer.css'
const footer = () => {
  return (
    <>
      <div className="container__footer">
        <Link to='/'>
          <h1 className="title">
            EL-<span>emam</span>
          </h1>
        </Link>

        <ul className="links__footer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/skills">skills</Link>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
        </ul>

        <div className="social__media">
            
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
      </div>
    </>
  );
};

export default footer;
