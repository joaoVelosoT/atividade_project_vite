import("./projects.css");
import CardProject from "./CardProject/CardProject";
import imageCardProject from "/src/assets/image/image 1.png";
const Projects = () => {
  return (
    <div className="containerTecnologias" id="containerTecnologias">
      <h3>Projects</h3>
      <ul>
        <CardProject
        image = {imageCardProject}
        title = "Project 1"
        subTitle = "This is a project made to learn the latest languages by building an app"
        />
        <CardProject
        image = {imageCardProject}
        title = "Project 2"
        subTitle = "This is a project made to learn the latest languages by building an app"
        />
      </ul>
    </div>
  );
};

export default Projects;
