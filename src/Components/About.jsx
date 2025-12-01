import about from "../Styles/about.module.css";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { IoMdDownload } from "react-icons/io";

function About() {
  return (
    <div className={about.body}>
      <div className={about.profile}>
        <img
          style={{ maxWidth: 300 }}
          src="../../public/assets/Images/PPS_1242(1).jpg"
          alt="Jonathan Kanaiya"
        />
        <div>
          <span className={about.iconLinks}>
            <a href="https://github.com/JKanaiya">
              <SiGithub title="https://github.com/JKanaiya" />
              <h4>JKanaiya</h4>
            </a>
            <a href="https://www.linkedin.com/in/jonathan-kanaiya-00a4b1332/">
              <SiLinkedin title="https://www.linkedin.com/in/jonathan-kanaiya-00a4b1332/" />

              <h4>jonathan-kanaiya</h4>
            </a>
            <a href="mailto:jonathankanaiya@gmail.com">
              <SiGmail title="jonathankanaiya@gmail.com" />

              <h4>jonathankanaiya</h4>
            </a>
            <a
              href="../../public/assets/jonathan-kanaiya-resume.pdf"
              download="Jonathan Kanaiya Resume"
              title="My Resume"
            >
              <IoMdDownload />
              <h4>Download Resume</h4>
            </a>
          </span>
        </div>
      </div>
      <aside>
        <h1>About Me</h1>
        <p>
          I am a Full Stack Engineer with experience building websites and web
          applications. I specialize in React, Express, PostgreSQL and Node, and
          have experience building applications with Flutter, Dart, C# and Java.
        </p>
      </aside>
    </div>
  );
}

export default About;
