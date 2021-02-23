import React from "react";
import "./projects.styles.css";
import CodeIcon from "@material-ui/icons/Code";
import HttpIcon from "@material-ui/icons/Http";
import { useStyles } from "../../styles/material-styles";
import { motion } from "framer-motion";

const projectData = [
  {
    id: "1",
    title: "Ecommerce shop ",
    imgUrl: [
      "ecommerce1.png",
      "ecommerce2.png",
      "ecommerce3.png",
      "ecommerce4.png",
    ],
    site: "https://eclothingshop.herokuapp.com/",
    desc: "React js, Redux, styled Components, Stripe, express js, firebase  ",
    gitlink: "https://github.com/Ed-Philly/ecommerce-clothing",
  },
  {
    id: "2",
    title: "Covid-19 Tracker",
    imgUrl: ["tracker1.png", "tracker2.png", "tracker3.png", "tracker4.png"],
    desc: "API integration , Charts js ",
    gitlink: "https://github.com/Ed-Philly/covid-visualizer",
    site: "",
  },
  {
    id: "3",
    title: "Gold Medallist",
    imgUrl: ["goldmedal1.png", "goldmedal2.png", "goldmedal3.png"],
    desc:
      "Data analysis, Data pulling, csv, Sqlite, Noder server , espress js, React",
    gitlink: "https://github.com/Ed-Philly/medallist",
    site: "",
  },
];

const ProjectPage = () => {
  const pageVariant = {
    in: { opacity: 1 },
    out: { opacity: 0.7 },
    transition: { duration: 0.5, type: "spring" },
  };

  const classes = useStyles();
  return (
    <motion.div
      className="project-container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
    >
      <div className="project-list">
        {projectData.map((project) => (
          <div key={project.id} className="project-item">
            <div className="img-container">
              {project.imgUrl.map((source) => (
                <img
                  key={source}
                  src={`${process.env.PUBLIC_URL}/images/${source}`}
                  alt={project.title}
                />
              ))}
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>

              <p>{project.desc}</p>
              <a
                href={project.gitlink}
                target="blank"
                className="project-links"
              >
                {" "}
                <CodeIcon className={classes.projectLinks} />
              </a>
              {project.site && (
                <a href={project.site} className="project-links" target="blank">
                  {" "}
                  <HttpIcon className={classes.projectLinks} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectPage;
