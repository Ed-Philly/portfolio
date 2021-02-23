import React from "react";
import { useStyles } from "./styles/material-styles";
import { Route, Switch, useLocation } from "react-router-dom";

//material ui
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./App.css";

//animation
import { AnimatePresence } from "framer-motion";

//components
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ProjectPage from "./components/projectpage/projectpage";
import ContactPage from "./components/contactpage/contact-page";

const App = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Hero />
          </Route>
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </AnimatePresence>

      <footer className="app-footer">
        <a href="https://www.linkedin.com/in/eddyedokpayi/">
          {" "}
          <LinkedInIcon className={classes.linkedIn} />
        </a>

        <a href="https://github.com/Ed-Philly/">
          <GitHubIcon className={classes.github} />
        </a>
      </footer>
    </div>
  );
};

export default App;
