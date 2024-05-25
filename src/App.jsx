import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import "./styles/mixin.scss";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/home.scss";
import "./styles/service.scss";
import "./styles/projects.scss";
import "./styles/contact.scss";
import "./styles/footer.scss";
import "./styles/header.scss";

function App() {
  return (
    <main className="c-main">
      <Header />
      <Home />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
