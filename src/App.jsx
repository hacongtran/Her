import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import "./App.css";
import "./styles/mixin.scss";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/home.scss";
import "./styles/service.scss";
import "./styles/projects.scss";

function App() {
  return (
    <main className="c-main">
      <Home />
      <Services />
      <Projects />
    </main>
  );
}

export default App;
