import { useEffect, useState } from "react";
import { myPortfolio } from "../../data/data";
import { motion, AnimatePresence } from "framer-motion";
import "./myport.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Mypotfolio = () => {
  const [port, setPort] = useState(myPortfolio);
  const [expanded, setExpanded] = useState({});

  const filterProjects = (category) => {
    if (category === "All") {
      setPort(myPortfolio);
    } else {
      const filtered = myPortfolio.filter(
        (item) => item.title.toLowerCase() === category.toLowerCase()
      );
      setPort(filtered);
    }
  };

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    setPort(myPortfolio);
  }, []);

  return (
    <div className="container__port">
      <motion.div
        className="title-port"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Portfolio</h1>
        <p>
          Creative Front-End Developer | React & Next.js Enthusiast | Turning
          ideas into functional websites.
        </p>

        <div className="btns__port">
          <button onClick={() => filterProjects("All")}>All</button>
          <button onClick={() => filterProjects("Html & Css")}>Html & Css</button>
          <button onClick={() => filterProjects("JavaScript")}>JavaScript</button>
          <button onClick={() => filterProjects("React Js")}>React Js</button>
          <button onClick={() => filterProjects("Next js")}>Next Js</button>
        </div>
      </motion.div>

      <div className="cards-container">
        <AnimatePresence>
          {port.length > 0 ? (
            port.map((item, index) => {
              const isExpanded = expanded[item.id] || false;
              const shortDesc =
                item.desc.length > 150
                  ? item.desc.slice(0, 150) + "..."
                  : item.desc;

              return (
                <motion.div
                  key={item.id}
                  className="card"
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 50 }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03 }}
                >
                  {item.image && (
                    <div className="card-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}

                  <h2 className="card-title">{item.title}</h2>

                  <p className="card-desc">
                    {isExpanded ? item.desc : shortDesc}
                    {item.desc.length > 150 && (
                      <span
                        className="read-more-link"
                        onClick={() => toggleReadMore(item.id)}
                      >
                        {isExpanded ? " Read Less" : " Read More"}
                      </span>
                    )}
                  </p>

                  <div className="card-links">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={item.view}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No projects found in this category.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Mypotfolio;
