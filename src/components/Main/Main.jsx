import About from "../About/About";
import Apresentacao from "../Apresentacao/Apresentacao";

import Projects from "../Projects/Projects";
import Formulario from "../Formulario/Formulario";
import image from "/src/assets/image/imageApresentacao.png"
import imageAbout from "/src/assets/image/imageAbout.png"
import iconCpu from "/src/assets/image/iconCpu.png"
import iconMouse from "/src/assets/image/iconMouse.png"

import ("./main.css");

const Main = () => {
    return(
        <main>
            <Apresentacao
            title = "Hi, I’m João"
            subTitle = "I’m a full-stack developer with 5 years of experience using React and NodeJS. Reach out if you’d like to learn more!"
            textButton = "Contact Me"
            image = {image}
             />
            <About
            title = "about"
            image = {imageAbout}
            />
            <Projects/>
            <Formulario/>
            
        </main>
    )
}

export default Main