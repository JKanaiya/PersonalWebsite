import about from "../Styles/about.module.css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

function About() {
  return (
    <div className={about.body}>
      <div className={about.profile}>
        <img
          src="../../public/assets/Images/PPS_1242(1).jpg"
          alt="Jonathan Kanaiya"
        />
        <div>
          <span className={about.iconLinks}>
            <a href="https://github.com/JKanaiya">
              <SiGithub />
              https://github.com/JKanaiya
            </a>
            <a href="https://www.linkedin.com/in/jonathan-kanaiya-00a4b1332/">
              <SiLinkedin />
              https://www.linkedin.com/in/jonathan-kanaiya
            </a>
            <a href="mailto:jonathankanaiya@gmail.com">
              <MdOutlineEmail /> jonathankanaiya@gmail.com
            </a>
            <a
              href="../../public/assets/jonathan-kanaiya-resume.pdf"
              download="Jonathan Kanaiya Resume"
            >
              <IoMdDownload />
              Download Resume
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
