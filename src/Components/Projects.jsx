import { useState } from "react";
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

// Get all unique technologies from projects
const allTechnologies = [
  ...new Set(projects.projects.flatMap((proj) => proj.technologies)),
];

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
      {(even || window.innerWidth < 864) && (
        <img src={`${image}`} alt={title} className={p.img} />
      )}
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
      {!even && window.innerWidth > 864 && <img src={`${image}`} alt={title} />}
    </div>
  );
}

function Projects() {
  const [selectedTech, setSelectedTech] = useState([]);

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects =
    selectedTech.length === 0
      ? projects.projects
      : projects.projects.filter((proj) =>
          selectedTech.every((tech) => proj.technologies.includes(tech))
        );

  return (
    <>
      <div className={p.searchContainer}>
        <h3>Filter by Technology:</h3>
        <div className={p.techFilter}>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              className={`${p.techBtn} ${
                selectedTech.includes(tech) ? p.selected : ""
              }`}
              onClick={() => toggleTech(tech)}
            >
              {icons[tech]}
              <span>{tech}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={p.container}>
        {filteredProjects.map((proj) => (
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
    </>
  );
}

export default Projects;
