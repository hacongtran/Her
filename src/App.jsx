import React from "react";
import Home from "./components/Home";
import "./App.css";
import "./styles/mixin.scss";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/home.scss";

function App() {
  return (
    <main className="c-main">
      <Home />;
    </main>
  );
}

export default App;
