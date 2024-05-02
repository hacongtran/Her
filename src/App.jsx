import React from "react";
import Home from "./components/Home";
import Services from "./components/Services";
import "./App.css";
import "./styles/mixin.scss";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/home.scss";
import "./styles/service.scss";

function App() {
  return (
    <main className="c-main">
      <Home />
      <Services />
    </main>
  );
}

export default App;
