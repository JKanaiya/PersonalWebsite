import "./Styles/reset.css";
import navigation from "./Styles/nav.module.css";
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
        maxWidth: "100dvw",
        backgroundColor: "oklch(0.2018 0.0081 17.85)",
      }}
    >
      <nav className={navigation.nav}>
        <h2
          onClick={() => switchPage("Home")}
          style={{ fontSize: page == "Home" ? "2.5rem" : "1.5rem" }}
        >
          Home
        </h2>
        <h2
          onClick={() => switchPage("Projects")}
          style={{ fontSize: page == "Projects" ? "2.5rem" : "1.5rem" }}
        >
          Projects
        </h2>
        <h2
          onClick={() => switchPage("About")}
          style={{ fontSize: page == "About" ? "2.5rem" : "1.5rem" }}
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
