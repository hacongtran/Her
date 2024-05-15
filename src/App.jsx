import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import "./styles/mixin.scss";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/home.scss";
import "./styles/service.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";

function App() {
  return (
    <main className="c-main">
      <Home />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
