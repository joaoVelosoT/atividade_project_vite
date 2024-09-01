import("./projects.css");
import imagem from "../assets/image/image 1.png";
const Projects = () => {
  return (
    <div className="containerTecnologias" id="containerTecnologias">
      <h3>Projects</h3>
      <ul>
        <li className="projectItem">
          <img src={imagem} alt="" />
          <p>
            <span className="titleProjectItem">Project A</span>
            This is a project made to learn the latest languages by building an
            app
          </p>
          <button>
            Source
          </button>
        </li>
        <li className="projectItem">
          <img src={imagem} alt="" />
          <p>
            <span className="titleProjectItem">Project A</span>
            This is a project made to learn the latest languages by building an
            app
          </p>
          <button>
            Source
          </button>
        </li>
        <li className="projectItem">
          <img src={imagem} alt="" />
          <p>
            <span className="titleProjectItem">Project A</span>
            This is a project made to learn the latest languages by building an
            app
          </p>
          <button>
            Source
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
