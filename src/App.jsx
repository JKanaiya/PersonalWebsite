import "./Styles/reset.css";
import "./Styles/nav.module.css";
import { useState } from "react";
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";

function App() {
  const [page, setPage] = useState("Home");

  const switchPage = (page) => {
    setPage(page);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100dvh",
        backgroundColor: "oklch(0.2018 0.0081 17.85)",
      }}
    >
      <nav>
        <h2
          onClick={() => switchPage("Home")}
          style={{ fontSize: page == "Home" ? 50 : 30 }}
        >
          Home
        </h2>
        <h2
          onClick={() => switchPage("Projects")}
          style={{ fontSize: page == "Projects" ? 50 : 30 }}
        >
          Projects
        </h2>
        <h2
          onClick={() => switchPage("About")}
          style={{ fontSize: page == "About" ? 50 : 30 }}
        >
          About
        </h2>
      </nav>
      {page == "Projects" ? (
        <Projects />
      ) : page == "About" ? (
        <About />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
