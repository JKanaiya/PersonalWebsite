import projects from "../projects.json";
import p from "../Styles/project.module.css";
import { RxArrowTopRight } from "react-icons/rx";
import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiPassport,
  SiPrisma,
  SiPostgresql,
  SiExpress,
  SiAxios,
} from "react-icons/si";

const icons = {
  React: <SiReact />,
  Axios: <SiAxios />,
  Nodedotjs: <SiNodedotjs />,
  Postgresql: <SiPostgresql />,
  Prisma: <SiPrisma />,
  Passport: <SiPassport />,
  Express: <SiExpress />,
};

function Project({
  even,
  title,
  desc,
  image,
  technologies,
  ghlink,
  live,
  livelink = "",
}) {
  return (
    <div key={desc} className={p.project}>
      {even && <img src={`${image}`} alt={title} />}
      <div className={p.article}>
        <div className={p.head}>
          <h3>{title}</h3>
          <div>
            {live && (
              <a href={livelink}>
                <RxArrowTopRight />
              </a>
            )}
            <a href={ghlink}>
              <SiGithub />
            </a>
          </div>
        </div>
        <p>{desc}</p>
        <span className={p.technologies}>
          {technologies.map((tech) => icons[tech])}
        </span>
      </div>
      {!even && <img src={`${image}`} alt={title} />}
    </div>
  );
}

function Projects() {
  return (
    <div className={p.container}>
      {projects.projects.map((proj) => (
        <Project
          even={
            projects.projects.indexOf(proj) % 2 == 0 ||
            projects.projects.indexOf(proj) == 0
          }
          title={proj.title}
          desc={proj.desc}
          image={proj.image}
          technologies={proj.technologies}
          ghlink={proj.ghlink}
          live={proj.live}
          livelink={proj.livelink}
        />
      ))}
    </div>
  );
}

export default Projects;
