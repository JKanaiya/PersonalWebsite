import projects from "../projects.json";
import { SiGithub, SiReact } from "react-icons/si";

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
    <div>
      <div>
        {even & <img src={`${image}`} alt={title} />}
        <div>
          <div>
            <h3>{title}</h3>
            {live & <a href={livelink}></a>}
            <a href={ghlink}>
              <SiGithub />
            </a>
          </div>
          {technologies.map((tech) => icons[tech])}
          <p>{desc}</p>
        </div>
      </div>
      {!even & <img src={`${image}`} alt={title} />}
    </div>
  );
}

function Projects() {
  return (
    <div>
      {projects.map((proj) => (
        <Project
          even={projects.indexOf(proj) % 2 == 0}
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
